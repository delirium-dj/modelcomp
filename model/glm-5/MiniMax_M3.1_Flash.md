# GLM 5 — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu) (GLM-5), `zai-org/GLM-5`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.ai's February 2026 MIT-licensed 744B/40B-active MoE — the "from vibe coding to agentic engineering" flagship that started the GLM-5.x line, with SWE-bench Verified 77.8%, Terminal-Bench 2.0 56.2%, τ²-bench 89.7% and a 200K window at $1.00/$3.20 per 1M.
- **Provider / access:** Hugging Face `zai-org/GLM-5` (MIT; `-FP8` variant), Z.ai platform, OpenCode Zen `opencode/glm-5` (**$1.00/M in, $3.20/M out, $0.20/M cached**), OpenRouter `z-ai/glm-5`.
- **Release / knowledge:** **2026-02-11** (HF repo created; OpenRouter created timestamp; AA "Released February 2026"). Knowledge cutoff not published.
- **IDs:** `glm-5` (Z.ai / Zen), `z-ai/glm-5` (OpenRouter), `zai-org/GLM-5` (HF).
- **Context window:** **200,000** tokens, **128,000** max output (`max_position_embeddings` 202,752; OpenRouter 204,800).
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$1.00/M in, $3.20/M out, $0.20/M cached** (Z.ai list price, OpenCode Zen and AA agree). Resellers differ (zhipuai $0.60/$2.69, 302ai $0.60/$2.60). Self-host $0 (MIT).
- **Architecture:** MoE, **744B total / 40B active** (card; the family scales "from 355B/32B to 744B/40B"), 78 layers, 256 routed experts (top-8) + 1 shared, hidden 6144, vocab 154,880, DeepSeek Sparse Attention, 23T→28.5T pre-training tokens; paper "GLM-5: from Vibe Coding to Agentic Engineering" (arXiv:2602.15763).

### Raw benchmarks found

> Z.ai's own card against Artificial Analysis; the agentic rows agree, the composite index differs by methodology.

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (Z.ai card, Terminus 2 and Claude Code scaffolds; 60.7/61.1 on the "verified TB2" set) · Terminal-Bench Hard: **43.2%** (AA)
- Tau2-bench: **89.7%** (Z.ai card) / **98.25%** (AA) · MCP-Atlas (public): **67.8%** (Z.ai) · Tool-Decathlon: **38.0%** (Z.ai)
- BrowseComp: **62.0%** (75.9% with context management) · BrowseComp-Zh: **72.7%** (Z.ai) · APEX-Agents-AA: **14.5%** (AA) · GDPval-AA: no verified public score found (AA field null)
- CyberGym: **43.2%** (Z.ai card) · Vending Bench 2: $4,432.12 (Z.ai) · AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA-Diamond: **86.0%** (Z.ai card) / **82.02%** (AA) · HLE: **30.5%** text-only / **50.4%** with tools (Z.ai) / **29.29%** (AA)
- AIME 2026 I: **92.7%** · HMMT Nov 2025: **96.9%** · IMOAnswerBench: **82.5%** (Z.ai card)
- Artificial Analysis Intelligence Index: **28 (estimated)** (#25/121) · AA-LCR: **75.67%** · IFBench: **72.31%** · CritPt: **2.0%** · output speed **75.7 tok/s**
- Omniscience Index / Accuracy / Hallucination Rate: **0.3 / 26.3% / 35.3%** (AA) — a low hallucination rate for the class
- BenchLM composite: **54.83/100**, #70 of 972

Coding:

- SWE-bench Verified: **77.8%** (Z.ai card, OpenHands harness, 200K ctx) — Z.ai publishes no independent number and Vals AI has no GLM-5 page
- SWE-bench Multilingual: **73.3%** · SWE-bench Pro: **55.1%** (from the GLM-5.1 comparison table / BenchLM) · LiveCodeBench: no verified public score found
- Terminal-Bench 2.1: no verified public score found for GLM-5 (TB2.1 appears only from GLM-5.2 onward)

Long context:

- No MRCR / RULER measurement published for GLM-5.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 89.7–98.3%, MCP-Atlas 67.8% and BrowseComp 62.0% are solid, but Terminal-Bench 2.0 56.2%, Tool-Decathlon 38.0%, APEX-Agents 14.5% and no GDPval keep the agentic band mid.
- **Reasoning: 74/100.** GPQA 82.0–86.0%, AIME 2026 92.7%, HMMT 96.9%, IMOAnswerBench 82.5% and a 35.3% hallucination rate are strong, capped by HLE 29.3–30.5% (text-only), CritPt 2.0% and an AA Intelligence Index of 28.
- **Context window: 70/100.** 200,000 tokens with 128,000 max output is the 200K tier and no retrieval measurement is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 72/100.** SWE-bench Verified 77.8% (vendor), SWE-bench Pro 55.1% and SWE-bench Multilingual 73.3% are mid-to-high band, with no LiveCodeBench and no independent SWE-bench verification.
- **Cost efficiency: 92/100.** $1.00/M in and $3.20/M out with a $0.20/M cache read is among the cheapest 744B routes, and MIT weights make self-hosting free.
- **Overall Score: 59/100.** Mean of the five quality dims = (62 + 74 + 70 + 15 + 72) / 5 = 58.6 → **59**. Best fit: budget agentic coding and long-horizon agents on a self-hostable MIT MoE — superseded by GLM-5.1 (SWE-Pro 58.4) and then 5.2/5.3.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Z.ai GLM-5 model card and blog, docs, arXiv paper, Artificial Analysis, BenchLM, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.1.md`, using the same headings.
