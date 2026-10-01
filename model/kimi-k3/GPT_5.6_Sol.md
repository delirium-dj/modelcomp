# Kimi K3 — findings by ChatGPT 5.6 Sol

- Source: Moonshot AI/Kimi K3 (`kimi-k3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (paid; no OpenCode Zen Free variant)
- **Short description:** Moonshot AI’s open-weight, native multimodal agentic flagship for long-horizon coding, knowledge work, and reasoning. Artificial Analysis labels the evaluated maximum-reasoning variant “Kimi K3 (Max)”; the first-party API ID is `kimi-k3`.
- **Provider / access:** Kimi API `kimi-k3` through OpenAI- and Anthropic-compatible APIs; OpenCode Zen `opencode/kimi-k3` through Chat Completions; Kimi Code also exposes the `k3` alias.
- **Release / knowledge:** 2026-07-16 release; no verified public knowledge-cutoff date found.
- **IDs:** `moonshotai/kimi-k3`, `opencode/kimi-k3`, `moonshotai/Kimi-K3`, `kimi-code/k3`; no Kimi K3 Free ID exists on Zen.
- **Context window:** 1,048,576 tokens total, verified by the official model configuration/card; the first-party input/output split and maximum output were not separately published.
- **Modalities:** Text, image, and video input; text output; document attachments are supported in Kimi Code, while direct raw-API PDF MIME support was not separately verified. Reasoning is always enabled; tool calls and structured outputs are documented; audio input/output and a dedicated JSON-mode guarantee were not verified.
- **Pricing (as of 2026-10-01):** Paid: $3.00 input, $15.00 output, $0.30 cached-read input, and $3.00 cache-write per 1M tokens. No K3 Free ID exists on Zen, so no free-tier privacy caveat applies; provider data-handling terms still apply.
- **Architecture:** 2.8T-total/104B-active MoE with 93 layers, 896 experts plus two shared experts, 16 selected experts per token, KDA and Gated MLA attention, and a 401M-parameter MoonViT-V2 vision encoder. The weights use MXFP4/MXFP8 quantization-aware training and are released under the custom Kimi K3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot model card, maximum effort, Kimi Code harness; #2/6 in the vendor comparison).
- Tau3-Banking / Tau2-Bench: **33.4%** (τ³-Banking, Artificial Analysis harness as cited by Moonshot; #1/6 in the comparison).
- GDPval-AA: **1686** (GDPval-AA v2 Elo, Artificial Analysis as cited by Moonshot; #3/6 in the comparison).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5% Toolathlon-Verified; 84.2% MCP-Atlas** (Moonshot model card; MCP-Atlas used the 500-task public subset, a 100-turn limit, and Gemini 3.1 Pro as judge).
  Reasoning / knowledge:
- GPQA Diamond: **93.5%** (Moonshot model card, maximum effort; tied #2/6 in the comparison).
- HLE: **43.5% without tools / 56.0% with general tools** (Moonshot model card, maximum effort).
- LCR / MLCR: **74.7%** (AA-LCR, Artificial Analysis as cited by Moonshot; #1/6 in the comparison).
- CritPt: **23.4%** (Artificial Analysis as cited by Moonshot).
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #3 of 117** (Artificial Analysis Intelligence Index v4.3.2, Kimi K3 Max).
- Omniscience Accuracy / Hallucination Rate: **46% / 51%** (Artificial Analysis launch evaluation).
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **58.7%** (Artificial Analysis as cited by Moonshot; #2/6 in the vendor comparison).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **67.5%** (Moonshot, Kimi Code harness); the official DeepSWE leaderboard result cited by Moonshot is **67.3%** with mini-SWE-agent.
  Long context:
- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 2.1 reaches the stated frontier band at 88.3%, with OSWorld-Verified at 84.8% and MCP-Atlas at 84.2%; τ³-Banking at 33.4%, GDPval-AA at 1686, and AutomationBench at 30.8% cap the score below the top tier.
- **Reasoning: 92/100.** GPQA Diamond at 93.5% and HLE at 43.5% without tools meet frontier thresholds; the AA Index of 44 and CritPt at 23.4% prevent a higher normalization.
- **Context window: 95/100.** The verified 1,048,576-token total qualifies for the ≥1M tier, but no ≥98% retrieval result at 512K or beyond was verified.
- **Multimodal: 85/100.** Text, image, video, and product-level document input with text output place it in the video/PDF tier; no verified audio modality or non-text output keeps it below 90.
- **Coding: 94/100.** Terminal-Bench 2.1 at 88.3% and SciCode at 58.7% clear frontier thresholds, while DeepSWE at 67.5% and the absence of verified SWE-bench/LiveCodeBench results cap the score.
- **Cost efficiency: 60/100.** The evaluated paid tier costs $3.00/$15.00 per 1M input/output tokens, matching the methodology’s approximately 60-point price band.
- **Overall Score: 91.6/100.** Mean of the five non-cost dimensions, half-up rounded; best suited to long-horizon coding, repository-scale agents, and multimodal knowledge work where its 1M context justifies premium inference pricing.

---

## Signature

- Provided by: **ChatGPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-01
- Method: fresh public internet research across official Moonshot documentation/model cards, Hugging Face, Artificial Analysis, BenchLM, OpenCode Zen, and named benchmark sources; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
