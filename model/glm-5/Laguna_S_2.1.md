# GLM-5 — findings by Laguna S 2.1

- Source: Z AI (glm-5)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5 (the dataset slug `glm-5` resolves to Z AI's base GLM-5 — a 744B/40B-MoE open-weights reasoning model that Artificial Analysis lists as "GLM-5 (Reasoning)". Z AI's repo also ships GLM-5.1, GLM-5.2, and GLM-5.3 as newer flagships; this folder tracks the original base GLM-5 released 2026-02-11.)
- **Short description:** Z AI's open-weights (MIT) reasoning model for long-horizon agentic engineering and complex systems tasks; 744B parameters / 40B active per token via a Mixture of Experts router, using DeepSeek Sparse Attention (DSA) to cut long-context serving cost. It targets agentic coding and multi-step tool use.
- **Provider / access:** Z AI first-party API at `https://api.chat.z.ai` (OpenAI-compatible Chat Completions), API model id `glm-5`; weights open on Hugging Face `zai-org/GLM-5` (BF16 / FP8) and ModelScope `ZhipuAI/GLM-5`, self-hostable with vLLM, SGLang, KTransformers.
- **Release / knowledge:** Released 2026-02-11. Training data through ~February 2026 (technical report arXiv:2602.15763); knowledge cutoff not separately published by Z AI, consistent with a Feb 2026 model.
- **IDs:** `zhipuai/glm-5`
- **Context window:** 200,000 tokens (Artificial Analysis model page). No input/output split is published; treated as a single 200k total window.
- **Modalities:** text in, text out. Reasoning/thinking enabled (AA marks "Reasoning: Yes"). Tool use supported (Chat Completions tool calling, JSON mode available). No image, audio, or video input — text output only.
- **Pricing (as of 2026-10-17):** $1.00 per 1M input tokens and $3.20 per 1M output tokens (Artificial Analysis, median across serving providers; 80% cache discount). No free/$0 tier.
- **Architecture:** 744 billion total parameters, 40 billion active per token, Mixture of Experts (MoE); DeepSeek Sparse Attention (DSA). License: MIT (open weights). Source: HF `zai-org/GLM-5` README + GitHub repo.

### Raw benchmarks found

> Sources: (1) Z AI technical report benchmark table reproduced on the Hugging Face model card `zai-org/GLM-5` README and the GitHub repo `zai-org/GLM-5` (both cite arXiv:2602.15763); (2) Artificial Analysis model page `/models/glm-5` (composite Intelligence Index, specs, pricing, speed); (3) Hugging Face `evaleval` community cross-check (HF eval-results). Note: GLM-5 is a thinking/reasoning model; the Z AI table reports Terminal-Bench 2.0 both with the Terminus-2 agent (56.2 / 60.7†) and with a Claude-Code agent (56.2 / 61.1†), where † denotes a "verified" subset that disambiguates ambiguous instructions.

**Agent / tool use:**

- Terminal-Bench 2.0 (Terminus 2 agent): **56.2%** (Z AI report) / 60.7% † verified (Z AI report)
- Terminal-Bench 2.0 (Claude Code agent): **56.2%** (Z AI report) / 61.1% † verified (Z AI report)
- Terminal-Bench 2.0 (HF community leaderboard, Terminus 2): **52.4%** (HF eval-results, tbench.ai source) — consistent with the Z AI number
- τ²-Bench: **89.7%** (Z AI report, Retail/Telecom/Airline domains)
- MCP-Atlas (public set, 500 tasks): **67.8%** (Z AI report)
- Tool-Decathlon: **38.0%** (Z AI report)
- Vending Bench 2 (1-year simulated business): **$4,432.12** final balance, **#1 among open-source models**, approaching Claude Opus 4.5 (Z AI report; Andon Labs)
- GDPval-AA: no verified public score found (contributes to AA's composite Intelligence Index only)
- OSWorld: no verified public score found
- SWE-Lancer / ApprenticeBench / CyberGym-verified: no verified public score found for this SKU

**Reasoning / knowledge:**

- HLE (Humanity's Last Exam, text-only subset): **30.5%** (Z AI report)
- HLE (w/ Tools): **50.4%** (Z AI report)
- GPQA Diamond: **86.0%** (Z AI report)
- AIME 2026 I: **92.7%** (Z AI report)
- HMMT Nov 2025: **96.9%** (Z AI report)
- IMOAnswerBench: **82.5%** (Z AI report)
- MMLU-Pro: **86** (HF eval-results community cross-check, HF leaderboard)
- Artificial Analysis Intelligence Index: **28** (estimated; #24/120 in the open-weights large class, #28/704 overall) — *note: marked "estimated"; AA states an independent evaluation is forthcoming. This is below the "frontier (60+) / mid (20–35)" band midpoint and conflicts with Z AI's "best-in-class open-source" claim, which is driven by the math benchmarks above.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

**Coding:**

- SWE-bench Verified: **77.8%** (Z AI report) — *conflict: the independent HF community run measured 72.8% for the same repo/task; the higher Z AI figure is used as primary but the gap is flagged*
- SWE-bench Multilingual: **73.3%** (Z AI report)
- MCP-Atlas (public set): **67.8%** (Z AI report)
- BrowseComp: **62.0%** (Z AI report) / **75.9%** with context management (Z AI report)
- BrowseComp-Zh: **72.7%** (Z AI report)
- CyberGym: **43.2%** (Z AI report)
- LiveCodeBench: no verified public score found for this SKU
- SciCode: no verified public score found
- DeepSWE / Coding Index: no verified public score found

**Long context:**

- 200,000-token context window confirmed (Artificial Analysis). No verified public MRCR / RULER / GraphWalks retrieval-accuracy figure is published for this model.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Half-up mean of (Tool + Reasoning + Context + Multimodal + Coding); Cost is scored independently and excluded from Overall.

- **Tool use: 74/100.** Terminal-Bench 2.0 ~56–61% (mid band) is the cap vs the closed-source frontier (~70%+); lifted by an elite τ²-Bench 89.7%, MCP-Atlas 67.8%, and Vending Bench 2 #1 among open-source. No GDPval-AA/OSWorld measured.
- **Reasoning: 84/100.** HLE w/ tools 50.4%, GPQA 86, AIME 92.7%, HMMT 96.9%, MMLU-Pro 86 — elite math/reasoning that out-runs every peer in this cohort; the AA Intelligence Index 28* is an unmeasured estimate (Z AI reports "best-in-class open-source reasoning"). Capped by the text-only HLE baseline (30.5%) and unmeasured LCR/CritPt.
- **Context window: 64/100.** 200,000 tokens sits at the top of the 100k–200k tier (65–84 → mapped to ~64 at the ceiling).
- **Multimodal: 15/100.** Text-only input (no image/audio/video) — confirmed by both the Z AI model card and the Artificial Analysis spec.
- **Coding: 82/100.** SWE-bench Verified 77.8% is the strongest coding result in this open-weights cohort (above nemotron 71.1% and gpt-5.1-codex 73.7%), plus Multilingual 73.3%, MCP-Atlas 67.8%. Capped by the lack of LiveCodeBench/SciCode/DeepSWE numbers and Terminal-Bench 56.2%.
- **Cost efficiency: 89/100.** $1.00/$3.20 per 1M tokens is cheap for a 744B-MoE model; no free tier.
- **Overall Score: 64/100.** Half-up mean of (74 + 84 + 64 + 15 + 82) / 5 = 63.8 → 64. An elite open-weights math/coding/reasoning model that is dragged down by text-only multimodal (15) and a 200k context ceiling; cost is favorable. Best fit for open-weight agentic-engineering workloads, not overall frontier parity.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (Z AI technical report benchmark table via Hugging Face `zai-org/GLM-5` README + GitHub repo; Artificial Analysis model page & leaderboard; Hugging Face `evaleval` community cross-check). Scores normalized 1–100 per model-comparison.md v4.
- Sources: Z AI technical report (via HuggingFace `zai-org/GLM-5`, arXiv:2602.15763); Artificial Analysis model page (`/models/glm-5`, Intelligence Index 27.9%, 200K context); BenchLM.ai model page (Overall 54.84/100, #69/954, 50 of 639 benchmarks, 2026-10-17); Vals AI; Qwen3.6-Plus & Arcee comparison tables.
- Discrepancy note: Intelligence Index 28 (file estimate) confirmed as 27.9% on Oct 17 page. MCP Atlas 67.8% (Z AI report) vs 31.1% (Qwen3.6 comparison table) — file uses Z AI report as primary.
- Re-verification (Oct 17): BenchLM confirms 54.84/100, #69/954, 50 of 639 benchmarks. Core Z AI report benchmarks unchanged. New Oct 17 benchmarks from Qwen3.6/Arcee tables: DeepPlanning 14.6%, WideResearch 69.8%, LongBench v2 60.8%, IFEval 92.6%, AA-IFBench 72.3%.

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page: Overall 54.84/100, rank #69/954, 50 of 639 benchmarks. Core Z AI report benchmarks unchanged. Intelligence Index 28→27.9% confirmed. Normalized scores unchanged (64).
