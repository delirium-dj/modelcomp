# Kimi K3.1 Pro — findings by GPT-5.6 Sol

- Source: Moonshot AI/Kimi K3.1 Pro (`kimi-k3.1-pro`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's 3T-class reasoning model for coding, finance, 3D creation, and agentic work, combining a 1M window with strong terminal and tool-use results.
- **Provider / access:** Kimi API via OpenAI-compatible Chat Completions and Responses APIs or Anthropic-compatible Messages API; also Kimi, Kimi Work, and Kimi Code.
- **Release / knowledge:** Released 2026-10-23 internationally (Moonshot China page dated 2026-10-24); knowledge cutoff undisclosed.
- **IDs:** `kimi-k3.1-pro`; faster serving profile `kimi-k3.1-pro-highspeed` uses the same capability at 2–3× speed and double standard rates.
- **Context window:** 1,048,576 tokens; maximum output reported as up to 1,048,576 tokens by Vals and official pricing documentation.
- **Modalities:** Text, image, and video input; text/JSON output; always-on reasoning, tool calls, and structured outputs.
- **Pricing (as of 2026-11-03):** $2 input / $0.20 cached input / $10 output per 1M tokens; 5-minute/1-hour cache writes $2/$4. Highspeed is $4/$0.20/$20 with $4/$8 writes.
- **Architecture:** Moonshot describes a roughly 3T-class MoE; independent reporting gives 2.8T total / 104B active. Weights were announced as forthcoming, but Epoch still classified the evaluated release as closed-weight, so open-weight status is not treated as verified here.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** vendor run; Vals independently measured **63.64% (#3/59)**. The close agreement supports the result despite harness differences.
- HLE-Full with tools: **70.0%**; BrowseComp **92.1%**; OSWorld V2.1 **79.6%** (Moonshot).
- GDPval-AA: **1,846 Elo**, #3 at launch according to Artificial Analysis.
- Vals Index: **62.52% ±1.14**, #9/32 on the current page.

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Moonshot).
- HLE-Full without tools: **51.1%**; HLE-Diamond **39.4%**, showing a substantial drop versus its tool-enabled score.
- Artificial Analysis Intelligence Index: **55**, #4 at launch.
- Kimi Hallu Bench factual-claim hallucination rate: **5.4%** in Moonshot's comparison; vendor-internal and not independently reproduced.

Coding:

- SWE-Marathon v1.1: **51.7%**; DeepSWE v1.1 **75.5%** (Moonshot).
- Vibe Code Bench v1.1: **84.89% ±2.95** (Vals).
- SciCode: **67%** best score in Epoch's scorecard.
- Moonshot's Terminal-Bench result is 65.7%, while Vals measured 63.64%; both place it near the frontier rather than indicating a material conflict.

Long context:

- AA-LCR: **86.3**, rank 3/423 in BenchmarkList's sourced aggregation; official context is 1M.

### Normalized scores (1–100)

- **Tool use: 94/100.** Independent Terminal-Bench 63.64 and vendor OSWorld/BrowseComp results establish excellent agency; harness dependence and weaker legal/tax rows cap it.
- **Reasoning: 92/100.** GPQA 94.2 and AA Index 55 are elite, though HLE-Diamond 39.4 shows a gap without tools.
- **Context window: 98/100.** Verified 1M window plus AA-LCR 86.3 supports both capacity and retrieval.
- **Multimodal: 88/100.** Native text, image, and video understanding is broad, but output is text-only and public multimodal evaluation is thinner than coding evidence.
- **Coding: 95/100.** Strong agreement across Terminal-Bench, DeepSWE, SWE-Marathon, Vibe Code, and SciCode supports a frontier score.
- **Cost efficiency: 82/100.** $2/$10 is competitive for this capability, although long reasoning output makes per-task savings smaller than the headline token-price reduction.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions; a strong choice for long-context coding and tool-heavy work when output-token use is monitored.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-11-03
- Method: public internet research across Moonshot's launch/API docs and independent Vals, Artificial Analysis, Epoch, and benchmark aggregations; vendor and independent Terminal-Bench results were compared directly.
- Reference URLs:
  - [Moonshot Kimi K3.1 Pro tech blog](https://www.kimi.com/en/blog/kimi-k3-1-pro)
  - [Kimi API quickstart](https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart)
  - [Kimi API pricing](https://platform.moonshot.ai/docs/pricing/chat)
  - [Vals Kimi K3.1 Pro](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
  - [Artificial Analysis launch benchmarks](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Epoch AI scorecard](https://epoch.ai/models/kimi-k3-1-pro)
- Future sources: add a new file next to this one using the same headings.
