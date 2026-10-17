# Kimi K3 — findings by GPT 5.6 Luna

- Source: Moonshot AI / Kimi K3
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight multimodal reasoning and agent model for long-horizon coding, research, and knowledge work.
- **Provider / access:** Kimi API `kimi-k3` at `https://platform.kimi.ai/`; OpenAI- and Anthropic-compatible APIs. Also downloadable from Hugging Face.
- **Release / knowledge:** 2026-07-16 announcement; knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K3`; API ID `kimi-k3`. No verified OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens, reported by the official model card and independently by Artificial Analysis; hosted output limits may be lower.
- **Modalities:** text and image input, text output; native reasoning, tool calls, and JSON/API integration documented. The official launch material also describes video workflows, but the released model card specifies text/image input, so video is not scored as a native API modality here.
- **Pricing (as of 2026-10-17):** Kimi API cache-hit input $0.30/M, cache-miss input $3.00/M, output $15.00/M. Paid; no verified Zen Free route.
- **Architecture:** 2.8T-total / 104B-active sparse MoE, 896 experts with 16 selected per token, Kimi Delta Attention and Attention Residuals; open weights under the Kimi K3 License.

### Raw benchmarks found

Official results use max reasoning effort and model-specific agent harnesses; those settings limit direct cross-model comparability. The official card and launch post agree on the main figures. Artificial Analysis independently reports a 44 Intelligence Index score.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (official Kimi K3 model card, Kimi Code harness)
- BrowseComp: **91.2%** (official model card, 1M context with compaction)
- Toolathlon-Verified: **76.5** (official model card)
- MCPMark-Verified: **94.5** (official model card)
- MCP-Atlas: **84.2** (official model card)
- GDPval-AA v2: **1686 Elo** (official model card, cited as Artificial Analysis)
- Artificial Analysis Intelligence Index: **44 / #4 of 120** (independent Artificial Analysis model page)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (official model card, max effort)
- HLE-Full: **43.5% without tools / 56.0% with tools** (official model card)
- AA-LCR: **74.7** (official model card, cited as Artificial Analysis)
- CritPt: **23.4** (official model card, cited as Artificial Analysis)
- Artificial Analysis Intelligence Index: **44** (independent Artificial Analysis evaluation)

Coding:

- DeepSWE: **67.5%** (official model card; the cited leaderboard value with mini-SWE-agent is 67.3%)
- ProgramBench: **77.8%** (official model card)
- SWE-Marathon: **42.0%** (official model card; H20-calibrated internal branch)
- SciCode: **58.7%** (official model card, cited as Artificial Analysis)
- Kimi Code Bench 2.0: **72.9%** (official model card, Kimi Code harness)

Long context:

- 1,048,576-token advertised window; BrowseComp **91.2%** under the official 1M-context evaluation. No independent public retrieval score at every window length was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** High scores on Terminal-Bench, MCPMark, BrowseComp, and Toolathlon support a frontier agent score; the model-specific harnesses and some internal evaluations cap it below 95.
- **Reasoning: 94/100.** GPQA Diamond 93.5%, HLE-Full 56.0% with tools, AA-LCR 74.7, and independent AA Index 44 support a very strong score; HLE and CritPt prevent a top score.
- **Context window: 100/100.** The official card and Artificial Analysis independently verify a 1M-token context; no larger verified window was found.
- **Multimodal: 82/100.** Native image input and strong official vision results, including Video-MME 90.0 and OmniDocBench 91.1, support a high score; text output and the model card's text/image API specification cap it.
- **Coding: 91/100.** Terminal-Bench 88.3%, ProgramBench 77.8%, FrontierSWE 81.2%, and Kimi Code Bench 72.9% show strong coding-agent performance; harness-specific results and DeepSWE below the leading scores cap it.
- **Cost efficiency: 65/100.** The $3/M input and $15/M output API pricing is materially above many open-weight alternatives, despite a 90% cache discount and strong capability.
- **Overall Score: 92/100.** Half-up mean of the five quality dimensions `(92 + 94 + 100 + 82 + 91) / 5 = 91.8`, rounded half-up; best fit is long-context multimodal agentic coding and research.

---

## Sources

- Official launch post: https://www.kimi.com/blog/kimi-k3
- Official Moonshot model card and benchmark table: https://huggingface.co/moonshotai/Kimi-K3
- Independent benchmark and pricing analysis: https://artificialanalysis.ai/models/kimi-k3
- Public model search corroboration: https://huggingface.co/models?search=Kimi%20K3

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-17
- Method: independent public-web research using official Moonshot/Hugging Face documentation plus Artificial Analysis; scores are normalized interpretations, not official vendor scores.
