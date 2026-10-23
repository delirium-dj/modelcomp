# GPT-OSS 120B Lite — findings by Qwen 3.8 Flash

- Source: OpenAI gpt-oss (`gpt-oss-120b` weights; curated id `opencode/gpt-oss-120b-lite`), cross-checked against the **gpt-oss-120b/20b Model Card** (arXiv 2508.10925), OpenAI's gpt-oss announcement, and the HF `openai/gpt-oss-120b` card
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity / variant note (why scored, not excluded):** there is **no separately announced "GPT-OSS 120B Lite" product** in OpenAI's gpt-oss release — the open-weight line is only `gpt-oss-120b` (116.8B total / **5.13B active**) and `gpt-oss-20b`. The curated meta's "117B / 5.1B-active … tuned for concise, high-density reasoning" describes the **exact same weights as gpt-oss-120b**, and the model card explicitly builds in an **adjustable reasoning-effort knob** ("…the ability to adjust the reasoning effort for tasks that don't require complex reasoning"). "Lite" is therefore treated as a **same-weights low/medium-reasoning-effort (concise) serving tier of gpt-oss-120b**, scored on that model's published effort-level benchmark table — *not* a distinct smaller model, and *not* a fabricated sibling (the base `gpt-oss-120b` folder holds its own report).

## Model card

- **Name:** GPT-OSS 120B Lite
- **Short description:** The **concise / efficient-reasoning posture of OpenAI's flagship open-weight MoE** `gpt-oss-120b` — an **Apache-2.0, text-only, 116.8B-total / 5.13B-active** reasoning model tuned to reach strong results with *shorter, higher-density* chains of thought. It is designed for **agentic workflows with strong instruction following, tool use (web search, Python execution), full CoT and structured outputs**, and runs on a single 80 GB GPU. "Lite" trades some peak-reasoning depth for cheaper, snappier answers at the same weight budget.
- **Provider / access:** open weights (Hugging Face `openai/gpt-oss-120b`, **Apache 2.0** + usage policy); Responses API; self-host free (fine-tunable on a single H100 node); hosted broadly (Fireworks, Groq, Together, OpenRouter…).
- **Release / knowledge:** gpt-oss line launched **2025-08-05**; knowledge cutoff (per model card) **2024**.
- **IDs:** `gpt-oss-120b` (weights) served in a concise/"Lite" reasoning tier; sibling `gpt-oss-20b`.
- **Context window:** **131,072 (128K) total**; **32,768 max output** (curated meta).
- **Modalities:** **text in / text out** — explicitly *text-only* (model card: "these text-only models…"); no image/audio.
- **Pricing (as of 2026-10-23):** **free Apache-2.0 weights**; hosted ≈ **$0.15/M in, $0.60/M out**.
- **Architecture:** autoregressive MoE transformer (36 layers, 128 experts, top-4 routing, gated SwiGLU), o200k_harmony tokenizer, flash-attention; scalable-reasoning RL post-training. OpenAI Preparedness: default gpt-oss-120b **below "High"** in all three tracked categories (CBRN, cyber, self-improvement), even adversarially fine-tuned.

### Raw benchmarks found

> **Provenance:** **OpenAI first-party** (gpt-oss model card, Table 3), reported at **low / medium / high reasoning effort**. "Lite" corresponds to the **concise low-to-medium effort columns** — that is the key interpretive move below (peak "high" figures would overstate a Lite tier).

Reasoning / knowledge (gpt-oss-120b, low → high effort):

- **GPQA-Diamond: 67.1 → 73.1 → 80.1** · **MMLU: 85.9 → 88.0 → 90.0** · **HLE (no tools): 5.2 → 8.6 → 14.9** · **AIME 2025 (no tools): 50.4 → 80.0 → 92.5** · **MMMLU avg: 74.1 → 81.3**

Coding / agentic (low → high effort):

- **SWE-bench Verified: 47.9 → 52.6 → 62.4** · **Aider Polyglot: 24.0 → 34.2 → 44.4** · **Codeforces Elo: 1595 → 2205 → 2463** · **τ-bench retail: 49.4 → 62.0 → 67.8**; airline: 42.6 → 49.2
- "Comes close to OpenAI o4-mini" at high reasoning; strong tool-use/Python-exec orientation.

Health / long-ctx: HealthBench 53.0→57.6 (near-o3 at high); no MRCR/RULER long-context score published.

### Normalized scores (1–100)

- **Tool use: 68/100.** Purpose-built for agentic work — web search, Python execution, structured outputs, τ-bench in the 50s–60s — genuinely capable; scored at the low/medium-effort "Lite" band rather than the peak, so mid-high not frontier.
- **Reasoning: 66/100.** At medium effort GPQA ~73 / AIME ~80 / MMLU ~88 is strong, and the "concise high-density" tuning preserves much of it cheaply — but a Lite tier is precisely *not* the 80.1-GPQA high-effort mode, so depth is scored mid-high on the low/medium columns.
- **Context window: 58/100.** **128K total / 32K output** is a serviceable mid-tier window with no published retrieval proof — unremarkable against the 1M field.
- **Multimodal: 15/100.** **Text-only, by the model card's own words** — the floor dimension; no image/audio/video.
- **Coding: 64/100.** SWE-bench Verified ~53 and Codeforces ~2200 at medium effort (62.4 / 2463 at high) make it a solid open coder, but the Lite/low-effort default and text-only scope keep this mid-high, not top.
- **Cost efficiency: 100/100.** The headline virtue: **free Apache-2.0 weights** running on one 80 GB GPU (or quantized consumer cards) plus ~$0.15/$0.60 hosted — near-zero cost for a 120B-class reasoner.
- **Overall Score: 54.2/100.** Half-up mean of the five quality dims (68+66+58+15+64)/5 = 54.2. Best fit: **cheap, fast, agentic text work** — tool-driven assistants, summarization/extraction, moderate coding — where strong-instruction-following 120B weights deliver most of o4-mini's utility with concise reasoning at essentially free cost. The score is anchored to the **"Lite" = low/medium-effort** reading of the effort table (a full high-effort run would lift reasoning/coding toward the ~78–80/62 marks), and is structurally **dragged by the text-only 15 and the modest 128K window**; treat "Lite" as a value/efficiency tier of `gpt-oss-120b`, not a capability upgrade.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **gpt-oss-120b/20b Model Card (arXiv 2508.10925)** Table 3 (GPQA-D 67.1/73.1/80.1, MMLU 85.9/88.0/90.0, HLE 5.2/8.6/14.9, AIME-25 50.4/80.0/92.5, SWE-bench Verified 47.9/52.6/62.4, τ-bench retail 49.4/62.0/67.8, Aider 24/34.2/44.4, Codeforces 1595/2205/2463 across low/med/high effort; 116.8B/5.13B-active, text-only, Apache 2.0, adjustable reasoning effort, near-o4-mini, Preparedness below High), OpenAI's **introducing-gpt-oss** announcement, and the HF `openai/gpt-oss-120b` card. Curated `meta.json` supplies 128K/32K and ~$0.15/$0.60. Scores are normalized 1–100 interpretations: **"Lite" is read as the low/medium reasoning-effort (concise) tier of the identical weights**, so capability dims use those columns rather than the flattering high-effort peak; the **text-only 15** (model-card-confirmed) is the structural floor. A web sweep found **no distinct "120B Lite" product** (only a niche CPU reseller), so it is scored as a same-weights variant, not a separate benchmarked model — and never conflated with the separate `gpt-oss-120b` folder report.
- Revisit trigger: any official announcement or benchmark row for a genuinely distinct "gpt-oss-120b-lite" (its own weights, or a documented low-effort quality figure), or clarification of which reasoning-effort column the "Lite" tier targets.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
