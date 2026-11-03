# Mercury 2 — findings by Qwen 3.8 Flash

- Source: Inception Labs (`mercury-2`; curated id `opencode/mercury-2`), cross-checked against Artificial Analysis (`artificialanalysis.ai/models/mercury-2`), OpenRouter (`inception/mercury-2`), and the Inception "Introducing Mercury 2" launch post
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' **first reasoning diffusion LLM (dLLM)** — positioned as "the world's fastest reasoning language model," trading raw intelligence for extreme throughput (sub-300 ms TTFT, 5–7× higher tokens/sec than autoregressive peers). Speed-optimized lane, not a frontier-quality model.
- **Meta discrepancy flag:** the curated `model/mercury-2/meta.json` is **`scaffolded: true`** and asserts "128K total / Text in-out / Standard pricing." First-party + Artificial Analysis evidence overrides this: **130K context**, and it is a real, independently benchmarked model — so this entry is scored, not excluded.
- **Provider / access:** Inception API Platform, OpenRouter (`inception/mercury-2`); OpenAI-API compatible Chat Completions; reasoning / reasoning_effort / tools / response_format params advertised.
- **Release / knowledge:** 2026 (reasoning dLLM generation); named to TIME's Best Inventions of 2026 (announced 2026-10-15).
- **IDs:** `inception/mercury-2`; siblings `mercury` (1), `mercury-2.5`, `mercury-3`.
- **Context window:** **130,000 tokens** (Artificial Analysis).
- **Modalities:** **text in / text out only**; reasoning yes; tool calls yes; JSON mode yes. No image/audio/video.
- **Pricing (as of 2026-11-03):** **$0.25/M input, $0.75/M output** (OpenRouter) — budget tier.
- **Architecture:** proprietary diffusion-based LLM (parallel denoising), the reasoning-tuned second generation.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **11** (AA comparison row: Mercury 2 = 11 vs GPT-5.1 Codex (High) = 24 est.) — a deliberately speed-first, low-intelligence point on the index.
- IFBench (Instruction Following): **70%** (Artificial Analysis tweet at launch).
- Terminal-Bench Hard: **≈ Claude Haiku 4.5 level** (Artificial Analysis launch note) — a small/fast-tier agentic-coding reference, not frontier.
- GPQA Diamond / HLE / SWE-bench Verified absolutes: **no verified independent row published for this exact ID** beyond the AA index and the two above; capability is defined by its index-11 placement and speed positioning.
- Long context: 130K window; **no MRCR/RULER retrieval score published**.

### Normalized scores (1–100)

- **Tool use: 38/100.** Advertised tool-calling and a Haiku-4.5-ish Terminal-Bench-Hard signal show usable agentic competence, but AA index 11 and the speed-first design cap it well below serious agent models; no τ-bench/MCP absolutes published.
- **Reasoning: 28/100.** Artificial Analysis Intelligence Index of 11 is objectively low — it is engineered for latency, not depth; strong instruction-following (IFBench 70%) partially offsets but does not lift raw reasoning.
- **Context window: 48/100.** 130K is a mid-range working window; no long-context retrieval benchmark published, and it is far below today's 1M-class entries.
- **Multimodal: 15/100.** Text-only model — the text-only floor applies (no image/audio/video).
- **Coding: 33/100.** Terminal-Bench Hard ≈ Haiku 4.5 is serviceable for small scaffolds, but there is no SWE-bench Verified row for this ID and the low intelligence index keeps coding modest.
- **Cost efficiency: 82/100.** $0.25/$0.75 per 1M is genuinely cheap, and the ultra-high throughput multiplies the effective value at scale.
- **Overall Score: 32.4/100.** Half-up mean of the five quality dims (38+28+48+15+33)/5 = 32.4. Best fit: latency-critical, cost-sensitive chat/support and classification where instant responses matter more than deep reasoning; not a frontier-quality pick.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03
- Method: public internet research — Artificial Analysis `mercury-2` page (context 130K, Intelligence Index 11 via mercury-2-vs-gpt-5-1-codex comparison), OpenRouter `inception/mercury-2` (pricing $0.25/$0.75, advertised tool/reasoning params), Inception "Introducing Mercury 2" launch post ("world's fastest reasoning LM"), Artificial Analysis launch note (IFBench 70%, ≈ Claude Haiku 4.5 on Terminal-Bench Hard), and TIME Best Inventions 2026 mention. Scores are normalized 1–100 interpretations, not official vendor scores. The scaffolded `meta.json` (128K / standard pricing) was overridden with AA/OpenRouter evidence.
- Revisit trigger: an AA single-number Intelligence Index update or a first-party GPQA/SWE-bench row for `mercury-2`.
- Future sources: add a new file next to this one, e.g. `Mercury_2.5.md`, using the same headings.
