- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Claude 5.5-series model (codename `claude-wafer-eap`), tuned for coding, computer use and long-horizon knowledge work. First 5.5-family release and successor to Claude Opus 5; a distinct model, not an alias of another entry.
- **Provider / access:** Anthropic API (Messages API, Chat Completions-style); the vendor's "fast mode" left research preview and opened to all developers on 2026-10-16. No distinct free ID verified on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-23 (internal testing reported 2026-09-21); version jumped from a 5.2 test checkpoint straight to 5.5. Knowledge cutoff: no verified public score found.
- **IDs:** `anthropic/claude-opus-5.5` (vendor-family ID as cited); internal codename `claude-wafer-eap`.
- **Context window:** 1,000,000 tokens; maximum standard output 128K tokens (Baidu Baike, citing Anthropic documentation).
- **Modalities:** text and image in, text out; extended thinking / reasoning; native tool use and computer use; structured JSON output. No verified public evidence of audio or video input, or of image/audio output.
- **Pricing (as of 2026-11-14):** $4 / 1M input tokens, $20 / 1M output tokens (source notes these are not officially confirmed by Anthropic), cache read $0.20 / 1M, cache write $5 / 1M — roughly 20% below Opus 5 on in/out and ~60% lower cache reads. Typical-task running cost reported ~40% below Opus 5.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Output speed reported 30%+ (one report 37%) above Opus 5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic launch comparison; GPT-6 Astra 57.9%)
- Computer Use: **81.8%** (Anthropic launch table; Claude Fable 5.1 80.7%)
- Visual chart recognition: **89.0%** (Anthropic launch table; Fable 5.1 88.4%)
- OSWorld-2.1 (offline subset): **87.2%** — best in Google DeepMind's Carbon comparison table
- Agents' Last Exam v1.1: **71.6%**
- AutomationBench (Zapier, AA): **42.5%**; Vending-Bench 2 bank balance: **$9,235**
- AutomationBench (Anthropic's own cross-app figure): **40.0%** (GPT-6 Astra 41.4%)
- GDPval-AA v2.1: **1846 Elo**, #1 (~300 ahead of GPT-6 Astra's 1542)
- CursorBench 4.0: **57.8%** (GPT-6 Sol 41.7%)
- Vals AI RSI (autonomous AI-research capability): **ranked #1 globally**
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index, max effort: **58** (GPT-6 Astra 53, Claude Fable 5.1 53); medium effort: **51** (Astra 50, Fable 5.1 49)
- AA Index v5.0 (Google DeepMind Carbon table): **58**
- Vals Index v2.2: **70.2%**
- Anthropic's launch claim: highest score in **4 of 6** comparable official benchmarks
- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact ID

Coding:

- FrontierCode: **54.4%** (GPT-6 Astra 53.3%)
- FrontierSWE 2 (Carbon table): **62.3%**
- SWE-sweep (Carbon table): **3.6%**
- Terminal-Bench 4.0 (AA-scored, Carbon table): **59.6%**
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- GraphWalks 256k to 1M, BFS (F1): **66.8%** in Google DeepMind's Carbon comparison table — materially behind Gemini 4 Carbon's 96.2% despite the 1M window.
- Blueprint-Bench 2 similarity: **51.2%**; RiemannBench **69.6%**; Terminal-Bench-Science 0.1 **59.0%**; Terminal-Bench-Science (Anthropic figure) **58.7%** (GPT-6 Astra 64.6%).
- CWE-bench **67.0%**; ExploitGym **34.5%**; SEC-bench Pro: no verified public score found.
- Independent MRCR / RULER figures: no verified public score found.

Safety / behaviour (context, not a scored dimension): automated behaviour-audit score higher than prior versions; jailbreak/bypass attempts down 85% vs the previous generation.

### Normalized scores (1–100)

- **Tool use: 96/100.** Leads Terminal-Bench 4.0 (66.4%), OSWorld-2.1 (87.2%) and GDPval-AA v2.1 (1846 Elo, #1), with a #1 Vals RSI ranking; capped just below the ceiling by a weaker Zapier AutomationBench 42.5% and Vending-Bench 2 $9,235.
- **Reasoning: 95/100.** Top AA Intelligence Index (58 max / 51 medium) and 4-of-6 official benchmark wins; capped by the absence of published GPQA/HLE figures for this exact ID and by heavy token use (~119K tokens/task at max effort, ~4x GPT-6 Astra).
- **Context window: 93/100.** A verified 1M-token window with 128K max output is top-tier; capped by GraphWalks 66.8% long-context retrieval, well behind the 1M-class leader.
- **Multimodal: 85/100.** Strong visual results (89.0% chart recognition, 66.3% Chartography) with image input; capped because no audio/video input and no non-text output are documented — text-out only.
- **Coding: 95/100.** FrontierCode 54.4%, CursorBench 4.0 57.8%, FrontierSWE 2 62.3%; capped by a low SWE-sweep 3.6% and GPT-6 Astra's higher FrontierSWE 2 (65.5%).
- **Cost efficiency: 58/100.** $4/$20 per 1M is premium pricing even after the ~20% cut; cheap cache reads ($0.20) and ~40% lower typical-task cost partly offset it.
- **Overall Score: 93/100.** Half-up mean of 96, 95, 93, 85, 95 = 92.8 → 93. Best fit: long-horizon agentic coding and computer-use workflows where reliability matters more than price.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 5.5 article and Google DeepMind's official Gemini 4 performance table, which independently scores Opus 5.5 on a common harness. Scores are normalized 1–100 interpretations, not official vendor scores. Pricing flagged in the model card as vendor-unconfirmed; figures measured under a third-party harness are labelled with that harness.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Opus 5.5 — 百度百科 (specs, pricing, launch benchmarks)](https://baike.baidu.com/item/Claude%20Opus%205.5/69131812)
  - [Gemini — Google DeepMind (official Gemini 4 benchmark table incl. Claude Opus 5.5)](https://deepmind.google/models/gemini/nano/)
