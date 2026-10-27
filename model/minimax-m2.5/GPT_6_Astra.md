# MiniMax M2.5 — findings by GPT 6 Astra

- Source: MiniMax / MiniMax-M2.5
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Description:** Open-weight text reasoning MoE for coding, search and office agents. Approximately 230B total/10B active parameters, as described in [Hugging Face's technical overview](https://huggingface.co/blog/mlabonne/minimax-m25). The [checkpoint](https://huggingface.co/MiniMaxAI/MiniMax-M2.5) uses Modified-MIT, not an unqualified standard MIT label.
- **Release:** February 12, 2026; knowledge cutoff not verified.
- **Access:** MiniMax `MiniMax-M2.5`, Anthropic-compatible Messages and compatible text-generation APIs; OpenRouter `minimax/minimax-m2.5`, Together and other hosts. No distinct Zen Free ID verified. Highspeed/Lightning is a serving-speed offering, not evidence of a different quality checkpoint.
- **Context / output:** Deployment-dependent approximately 196K–205K. [Official SGLang guide](https://huggingface.co/MiniMaxAI/MiniMax-M2.5/blob/main/docs/sglang_deploy_guide.md) states 196K per sequence; [EvoLink](https://evolink.ai/minimax-m2-5) advertises 204,800 context/131,072 output. The latter output cap is provider-specific, not a universally verified native limit.
- **Modalities:** Text input/output, reasoning and tools. The broader MiniMax product's image/audio capabilities do not transfer to this checkpoint.
- **Pricing (2026-10-27):** [AA first-party API reference](https://artificialanalysis.ai/models/minimax-m2-5) $0.30 input/$1.20 output per million. EvoLink $0.309/$1.236 and $0.062 cache read. DeepInfra's comparison lists its FP8 at $0.27/$0.95; provider rates and precision vary. Open weights still incur serving costs.

### Raw benchmarks found

**Vendor:** [Launch and methodology](https://www.minimax.io/news/minimax-m25) reports SWE-bench Verified **80.2%**, Multi-SWE-Bench **51.3%**, BrowseComp with context management **76.3%**. Same vendor's alternative-scaffold SWE Verified: Droid **79.7%**, OpenCode **76.1%**. These are vendor runs across different harnesses, not three independent evaluator confirmations.

SWE tasks use modified Claude Code scaffolding and four-run averages. Terminal-Bench methodology changes Dockerfiles, uses eight CPU cores/16GB RAM, 7,200-second timeouts and retries empty final responses; no numeric TB score is inferred from the image-only chart. BrowseComp discards history after 30% context usage; it is not a native full-window retrieval test. Internal GDPval-MM **59.0% average win rate** is neither GDPval-AA Elo nor a general task-success rate. Internal VIBE-Pro is not Vals Vibe Code Bench.

**Independent:** [AA comparison](https://artificialanalysis.ai/models/comparisons/minimax-m2-5-vs-claude-4-1-opus-thinking) reports **HLE 21%, CritPt 1%, AA-Omniscience −39, AA-LCR v1.1 73%**. Its current Intelligence Index **23 is estimated**, excluded as a measured composite. Omniscience is a signed index. [Vals](https://www.vals.ai/models/minimax_MiniMax-M2.5) publishes exact-model evaluations and identifies strong SWE results on its own index split. [BenchLM](https://benchlm.ai/models/minimax-m2-5) mirrors its **GPQA Diamond 82.1%**; that is one Vals run, not an additional independent measurement.

No verified numeric exact-model Claw-Eval, Toolathon, MCP-Atlas, DeepSWE, SciCode or 512K+ retrieval result recovered. Tool-use interpretation is supported by search and repository-agent results, with weaker direct general-tool coverage.

### Discrepancies and efficiency

The launch's pricing prose describes Lightning $0.30 input/$2.40 output and standard at half its price, while current AA lists standard $0.30/$1.20. Current dated endpoint evidence controls this report; historical prose is not silently harmonized. The launch's $1/hour headline is based on output throughput and is not an all-inclusive workload bill.

The launch reports 31.3 versus 22.8 minutes per SWE task: approximately 27% less elapsed time or 37% higher completion rate, not literally 37% less time. Its 3.52M tokens/task includes repeated agent context and should not be interpreted as one output. [DeepInfra's provider comparison](https://deepinfra.com/blog/minimax-m2-5-api-benchmarks) is provider-authored performance evidence, not neutral independent model-quality testing; it also records different context limits and FP8/FP4 serving configurations.

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 76.3 and cross-harness repository work support useful agents; custom context management and limited general-tool measurements constrain confidence.
- **Reasoning: 73/100.** Independent GPQA 82.1 and HLE 21 support capable reasoning; CritPt 1 and Omniscience −39 temper factual reliability.
- **Context window: 70/100.** Approximately 196K–205K hosting and LCR 73 support substantial context, below 256K and far below 1M tiers.
- **Multimodal: 15/100.** Text-only checkpoint; external tools and companion products do not create native vision/audio.
- **Coding: 81/100.** SWE Verified 76.1–80.2 across vendor harnesses and Multi-SWE 51.3 support strong engineering; independent split/harness differences remain important.
- **Cost efficiency: 95/100.** $0.30/$1.20 standard hosting is economical for coding, though long traces and repeated input determine total spend.
- **Overall Score: 63/100.** (75 + 73 + 70 + 15 + 81) / 5 = 62.8 → 63. Strong economical text coding with limited modality breadth.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three initial targeted searches plus primary launch retrieval and focused independent/specification searches; normalized scores are interpretations, not vendor scores.
