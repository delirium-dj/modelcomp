# GPT-5 Nano — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5-nano`; API Responses + Chat Completions)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's smallest and cheapest GPT-5 API tier (released 2025-08-07), a reasoning model for high-volume latency-sensitive tasks. GPQA 71.2%, AIME 85.2%, and SWE-V 54.7% at **$0.05/$0.40 per MTok** make it a value leader. Text+image+video input (VideoMMMU 66.8%, VideoMME 65.7%). HLE 8.7% and poor MRCR retrieval (43.2%/34.9%) cap reasoning and context dimensions. **Superseded by GPT-5.4 nano** (which offers 400K/128K with better per-token economics at $0.20/$1.25).
- **Provider / access:** OpenAI API (`gpt-5-nano`, Responses + Chat Completions); Azure AI Foundry; Codex CLI family. No Zen Free ID.
- **Release / knowledge:** **2025-08-07** (official developer announcement); knowledge cutoff not separately published for nano.
- **IDs:** `openai/gpt-5-nano`; curated `opencode/gpt-5-nano`.
- **Context window:** **272K input / 128K combined reasoning+output / 400K total** (official developer post). Curated `meta.json` "128K total" is wrong — placeholder.
- **Modalities:** **Text + image in** (video understanding benchmarked via VideoMMMU/VideoMME frame sampling); text out. Reasoning model with effort levels (minimal/low/medium/high); custom plaintext tools (regex/CFG-constrained); parallel tool calling; Structured Outputs. Curated "Text in/out" understates — corrected.
- **Pricing (as of 2026-10-02):** **$0.05 in / $0.40 out per MTok**; prompt caching and Batch API discounts. Paid — no free tier. Cost excluded from Overall.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> All numbers from OpenAI's official "Introducing GPT-5 for developers" (2025-08-07), GPT-5 nano at **high reasoning effort**, full datasets. Verified via qualifying `Kimi_K3.md` (2026-10-01).

Agent / tool use:

- τ²-bench: airline **41.0%**, retail **62.3%**, telecom **35.5%**
- Scale MultiChallenge: **54.9%** (o3-mini grader); COLLIE **96.9%**
- Terminal-Bench 2.1 / GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (no tools, high effort)
- HLE: **8.7%** (no tools) — well below 40% frontier bar
- AIME '25: **85.2%**; HMMT 2025: **75.6%**; FrontierMath: 9.6% (python tool)
- Hallucination (lower=better): LongFact-Concepts **1.0%**, LongFact-Objects **2.8%**, FActScore **7.3%** — genuinely low fabrication
- AA Intelligence Index / Omniscience: **no independent row found**

Coding:

- SWE-bench Verified: **54.7%** (23/500 omitted for infrastructure)
- Aider polyglot (diff): **48.4%**; SWE-Lancer IC SWE Diamond: $49K
- LiveCodeBench / SciCode: **no verified public score found**

Long context:

- OpenAI-MRCR 2-needle: **43.2%** @128K, **34.9%** @256K — poor
- GraphWalks: BFS <128K **64.0%**; parents <128K **43.8%**
- BrowseComp Long Context: **80.4%** @128K, **68.4%** @256K

Multimodal:

- MMMU **75.6%**; MMMU-Pro **62.6%**; CharXiv reasoning 62.7%; **VideoMMMU (256 frames) 66.8%**; ERQA 50.1%; **VideoMME long w/ subs 65.7%**

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 58/100.** τ² retail 62.3% is mid; airline 41.0% and telecom 35.5% are weak. COLLIE 96.9% (instruction following) is excellent but not agent tool use. No TB/GDPval/MCP rows. Kimi 60.
- **Reasoning: 58/100.** GPQA 71.2 is mid-band; AIME 85.2 is strong math for the price. But HLE 8.7% is far below frontier. Low hallucination rates (1–2.8%) are a genuine positive — epistemically honest at this size tier. Kimi 60.
- **Context window: 66/100.** 400K total = 200K–500K band (65–84). But MRCR 43.2%/34.9% and GraphWalks parents 43.8% are poor effective retrieval — the 400K window is largely nominal. BrowseComp 80.4% @128K is decent. Kimi 68.
- **Multimodal: 72/100.** Image + video input = 75–90 band at floor: MMMU 75.6, VideoMMMU 66.8, VideoMME 65.7 are real measurements confirming multimodal capability. But it's the weakest GPT-5 family member (full GPT-5 has higher scores); no audio. Kimi 75.
- **Coding: 58/100.** SWE-V 54.7% is genuinely mid-tier (roughly GPT-4.1 level); Aider 48.4% confirms. Not frontier coding. Kimi 60.
- **Cost efficiency: 97/100.** $0.05/$0.40 per MTok is among the cheapest reasoning-model endpoints with image+video input. Caching and Batch push it lower. Cost excluded from Overall.
- **Overall Score: 62/100.** Mean of Tool 58, Reasoning 58, Context 66, Multimodal 72, Coding 58 = 312/5 = 62.4 → **62**. Best fit: **ultra-cheap high-volume reasoning, classification, extraction, and lightweight multimodal pipelines** — the $0.05/$0.40 with video/image support is a unique price/capability point. Not a frontier reasoner (HLE 8.7%), not a strong agent (τ² airline 41%), not a long-context tool (MRCR 43%). Between Kimi's 65 and the cohort's 61.5; superseded by GPT-5.4 nano in production.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (OpenAI official launch table, full panel). Curated `meta.json` placeholder corrected (128K → 400K total; text-only → text+image+video). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) the model is **from August 2025** — superseded by GPT-5.4/5.6/6.x lines, (b) MRCR 43% confirms the 400K window is nominal not effective, (c) low hallucination rates (LongFact 1–2.8%) are genuinely notable at this price tier.
- Revisit trigger: none planned — historical model superseded by GPT-5.4 nano and the 5.6/6.x family.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
