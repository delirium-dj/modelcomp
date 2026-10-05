# Big Pickle — findings by Claude (anthropic/claude-sonnet-4-20250514)

- Source: OpenCode Zen / `big-pickle`
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (Free)
- **Short description:** Big Pickle is an experimental model optimized for coding agents, supporting tasks such as chat-based completions within software engineering applications, provided through OpenCode Zen. It is widely believed to be based on GLM-4.6, though it has also been identified as a hosted instance of the GLM-4.7 large language model within internal ML communities. The underlying model may rotate periodically; its current identity is undisclosed.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`. API: `openai-completions`, Base URL: `https://opencode.ai/zen/v1`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** Release date 2025-10-17; knowledge cutoff 2025-01.
- **IDs:** `opencode/big-pickle` (Free ID exists on Zen)
- **Context window:** 200,000 tokens total (200k context window, up to 32k output tokens). Verified via OpenCode Zen API spec and multiple third-party aggregators.
- **Modalities:** Text in; text out; reasoning, tool calling, structured output, temperature. No image/audio/video input. JSON mode via strict mode support.
- **Pricing (as of 2026-10-05):** $0.00/1M input tokens and $0.00/1M output tokens. Free tier; OpenCode states that prompts to big-pickle during its free period may be used to improve the model.
- **Architecture:** Transformer-based MoE architecture (identified as GLM-4.6/4.7 alias) with approximately 355 billion total parameters and 32 billion activated per inference step. Open-weights base (MIT license on GLM family), but Big Pickle endpoint is proprietary API-only.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found** (GLM-4.7 reports 41% on TB 2.0 per HuggingFace, but not confirmed under big-pickle alias on TB 2.1)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (GLM-4.7 reports 87.4% on τ²-Bench per Z.ai, not confirmed under big-pickle alias)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (Scale AI SWE Atlas Codebase QnA, 63/124 tasks resolved using Mini-SWE-Agent scaffold, GitHub: PhillipChaffee/big-pickle-swe-atlas)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (GLM-4.7 = 85.7% per HF model card; GLM-4.6 = 63.2% per MindStudio; not confirmed directly for big-pickle)
- HLE: **no verified public score found** (GLM-4.7 = 24.8% per HF; GLM-4.6 = 5.2% per MindStudio)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — TokenDyno Intelligence Index listed as "—" for Big Pickle.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **~68–73.8%** — one community benchmark review reports Big Pickle at ~68% on SWE-bench; another aggregator lists "SWE-bench ~72%"; Grokipedia attributes 73.8% SWE-bench Verified to the hosted GLM-4.7 instance identified as Big Pickle. Caution: these are not official first-party scores under the big-pickle name. Best estimate: **~68–73.8%** depending on which underlying model was active.
- LiveCodeBench: **82.8** — reported for Big Pickle on LiveCodeBench V6 in a community benchmark review (SolvedByCode).
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- 200,000 token context window confirmed by API spec. No MRCR / RULER / GraphWalks retrieval score reported for Big Pickle specifically.

### Normalized scores (1-100)

**Important caveat:** Big Pickle is a stealth/alias model whose underlying weights may rotate. The scores below are best-effort interpretations from the sparse data found under the `big-pickle` identity specifically, supplemented by its believed GLM-4.6/4.7 lineage where noted. Confidence is low-to-moderate.

- **Tool use: 52/100.** Only verified direct score is SWE Atlas Codebase QnA at 50.8%. No Terminal-Bench 2.1, Tau3, or GDPval-AA scores found under big-pickle. Anecdotal reports of strong agentic tool use (fastest to complete tasks in community testing, proactively used tool search) suggest mid-range capability. Capped by lack of verified frontier-tier benchmarks.

- **Reasoning: 55/100.** No GPQA Diamond or HLE scores verified directly for big-pickle. If underlying model is GLM-4.6 (GPQA 63.2%, HLE 5.2%) this maps to ~55. If GLM-4.7 (GPQA 85.7%, HLE 24.8%) it would be ~68–72. Conservatively scored at the lower end given ambiguity and no direct verification. No AA Intelligence Index score.

- **Context window: 70/100.** 200,000 token context window confirmed. Per methodology: 200K = 70. No long-context retrieval benchmarks (MRCR/RULER) found, so no upward adjustment.

- **Multimodal: 15/100.** Input: text only. No image, audio, or video support. Text-only = 15 per methodology.

- **Coding: 72/100.** LiveCodeBench V6 score of 82.8 reported for Big Pickle. SWE-bench estimates range from ~68% to ~73.8% depending on source and underlying model snapshot. SWE Atlas Codebase QnA: 50.8%. These are solid but sub-frontier scores (frontier = DeepSWE 74%+, SWE-bench 75%+). Capped below 80 due to lack of DeepSWE, SciCode, and Terminal-Bench 2.1 scores, and SWE-bench not clearly exceeding 74%.

- **Cost efficiency: 100/100.** Priced at $0.00/1M input tokens and $0.00/1M output tokens. $0 = 100 per methodology. Note: free-tier data may be used for model improvement.

- **Overall Score: 52.8/100.** Mean of (52 + 55 + 70 + 15 + 72) / 5 = 264 / 5 = 52.8. Best fit: a free, capable coding assistant for developers who need a zero-cost option with strong context handling and solid code generation, but limited by text-only modality, unverified reasoning benchmarks, and the opacity of its rotating identity. Best suited for budget-conscious agentic coding workflows rather than frontier-tier production use.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4-20250514)** — 2026-10-05
- Method: Public internet research (OpenCode Zen API specs, Grokipedia, Steemit, DEV Community, TokenDyno, SolvedByCode blog, GitHub community eval, MindStudio model cards, HuggingFace GLM model cards, NVIDIA model cards, Malay Mail press release, SourceForge, AyAutomate, pi.dev); scores are normalized 1-100 interpretations, not official vendor scores. Many benchmark numbers are attributed to Big Pickle's believed underlying model (GLM-4.6 or GLM-4.7) rather than directly verified under the `big-pickle` endpoint. The model's stealth/rotating nature significantly limits benchmark verifiability.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.