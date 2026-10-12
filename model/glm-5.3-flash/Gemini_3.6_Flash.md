# GLM 5.3 Flash — findings by Gemini 3.6 Flash

- Source: Z.ai (`zai/glm-5.3-flash` / `opencode/glm-5.3-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weights 320B sparse Mixture-of-Experts foundation model, engineered with hybrid sparse-linear attention for ultra-fast multimodal reasoning, visual coding loops, and 1M context efficiency.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), OpenCode Zen (`opencode/glm-5.3-flash`), Hugging Face open weights. Chat Completions API.
- **Release / knowledge:** 2026-08-26 release (stealth-tested as ox-alpha); early 2026 knowledge cutoff.
- **IDs:** `zai/glm-5.3-flash`, `opencode/glm-5.3-flash`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Z.ai technical disclosures.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.15 input / $0.50 output per 1M tokens (Free tier on OpenCode Zen; open weights under MIT license).
- **Architecture:** 320B total / 18B active parameters sparse Mixture-of-Experts with hybrid sparse-linear attention, mHC, and IndexPool KV-cache compression.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Terminal-Bench 4.0: **32.8%**)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%** (MCP Atlas)
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1510 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **39.9%** (Humanity's Last Exam)
- Artificial Analysis Intelligence Index / BenchLM overall: **41.8**
- SciCode / AA-SciCode: **51.6%**
- LCR / MLCR: **78.0%**
- CritPt: **66.0%**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **92.0%** (SWE-bench Verified) / **63.4%** (DeepSWE v1.1)
- LiveCodeBench: **80.5%–81.0%**
- Artificial Analysis Coding Index: **71.5%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **84.3%**

Long context:

- RULER 1M: **98.6%** retrieval retention with 4.4× smaller KV-cache footprint via hybrid sparse-linear attention.

### Normalized scores (1–100)

- **Tool use: 89/100.** High-speed agentic execution highlighted by 84.3% on Terminal-Bench 2.1 and 1510 Elo on GDPval-AA.
- **Reasoning: 89/100.** Strong scientific and analytical reasoning backed by 91.2% on GPQA Diamond and 39.9% on Humanity's Last Exam.
- **Context window: 96/100.** Efficient 1M token context window backed by hybrid sparse-linear attention and IndexPool compression.
- **Multimodal: 86/100.** Native multimodal perception processing text, images, and video with autonomous visual UI coding loops.
- **Coding: 89/100.** Premier software development capabilities evidenced by 92.0% on SWE-bench Verified and 81.0% on LiveCodeBench.
- **Cost efficiency: 98/100.** Ultra-affordable developer pricing ($0.15 / $0.50 per 1M), free Zen tier, and MIT open weights.
- **Overall Score: 90/100.** Top-tier open-weight multimodal efficiency model combining elite coding with sub-second execution speeds.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Z.ai technical reports, Artificial Analysis leaderboards, and Hugging Face model cards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
