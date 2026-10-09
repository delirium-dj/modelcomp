# Big Pickle — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM-4.6)
- **Short description:** OpenCode Zen's "stealth" reasoning model, community-recognized variant of Zhipu's GLM-4.6 architecture. Designed for deliberate analysis and multi-step problem solving. A 30B parameter model with 3B active per token, text-only, optimized for reasoning tasks with tool-calling capabilities.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`; OpenAI-compatible Chat Completions API at `https://opencode.ai/zen/v1/chat/completions`; via OpenRouter; also available through llama.cpp, vLLM, and Text Generation Inference.
- **Release / knowledge:** Listed 2025-06-17 via models.dev catalog; knowledge cutoff 2025-01.
- **IDs:** `opencode/big-pickle` (`owned_by: opencode`); historically `zen/big-pickle`.
- **Context window:** 200,000 tokens total (160K input / 32K output) per models.dev TOML and Pi.dev.
- **Modalities:** Text in/out only; interleaved reasoning support; native tool calling; structured output.
- **Pricing (as of 2026-10-09):** Free tier at $0/$0/$0 cached (limited-time) on OpenCode Zen; paid equivalent ~$0.60/$2.20 per 1M tokens through other providers. Free tier is time-limited and training data may be used to improve the model.
- **Architecture:** 30B total / 3B active parameters, Mixture-of-Experts (speculated Zhipu GLM-family base), not officially confirmed by OpenCode; open_weights = false for the official endpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.5%** (community eval; limited coverage)
- SWE Atlas Codebase QnA: **50.8%** (63/124) community run 2026-08-11; official harness + Scale verifier; language breakdown: TS 58.1%, Py 55.2%, Go 50.0%, C 38.5%
- ORPT-Bench (community): composite **0.615**, success 67%
- GDPval-AA: **900-1200 Elo** (estimated; specific score not verified)
- Toolathon / MCP-Atlas: not verified for Big Pickle

Reasoning / knowledge:

- GPQA Diamond: **not verified** - no public score found for Big Pickle specifically
- HLE: **not verified** - no public score found for Big Pickle specifically
- LCR: **not verified** - no public score found for Big Pickle specifically
- CritPt: **not verified** - no public score found for Big Pickle specifically
- AA Intelligence Index: **not verified** - no public score found for Big Pickle
- MMLU-Pro: **not verified** - no public score found

Coding:

- SWE-bench Verified: **not verified** - official score not published
- LiveCodeBench: **not verified** - no public score found
- SciCode: **not verified** - no public score found
- DeepSWE: **not verified** - no public score found
- Coding Index: **not verified**

Long context:

- MRCR / RULER / GraphWalks: **not verified** - no public score found

### Normalized scores (1–100)

Derived from the benchmarks above using methodology in `model-comparison.md`; major limitations in available benchmark data:

- **Tool use: 40/100.** Only verified public number is SWE Atlas Codebase QnA 50.8%; community ORPT-Bench 0.615/67%. No Terminal-Bench, Tau, GDPval, or Claw-Eval scores found; thin evidence base. Weak agentic benchmark coverage limits scoring.

- **Reasoning: 55/100.** "Reasoning model" spec per catalog; no measured GPQA, HLE, LCR, or Intelligence Index numbers; conservative floor assignment for a claimed reasoning-specialist model. Limited independent benchmark verification.

- **Context window: 70/100.** 200K window maps to 65-84 tier; 32K max output is on lower end for large contexts. Window is substantial but retrieval benchmarks not verified.

- **Multimodal: 15/100.** Text-only in/out; no image/audio/video capabilities. Standard text-only score applies.

- **Coding: 60/100.** SWE Atlas Codebase QnA 50.8% suggests mid-pack coding capability; no SWE-bench Verified or LiveCodeBench numbers; anecdotal "Sonnet-class" claims unsubstantiated.

- **Cost efficiency: 100/100.** $0 free tier during limited period; exceptional value proposition. Note: free tier is time-limited with typical data-usage caveats.

- **Overall Score: 48/100.** Mean of five non-cost dims: (40 + 55 + 70 + 15 + 60) / 5 = 48.0 → 48. A zero-cost stealth model with minimal verified benchmarks; 50.8% SWE Atlas Codebase QnA is the strongest evidence anchor. Limited benchmark coverage prevents higher assessment. **Best fit:** exploratory or low-stakes reasoning tasks where zero-cost is paramount.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public-internet research (models.dev, Pi.dev, OpenCode Zen docs, community eval repos); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Commission_1.0.md`, using the same headings.