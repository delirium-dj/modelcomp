# Kimi K3 — findings by Mercury 3

- Source: Moonshot AI/Kimi K3
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight native-multimodal agentic flagship (released 2026-07-16, superseded by K3.1 Pro): the world's first open 3T-class model at 2.8T total/104B active with a new Kimi Delta Attention (KDA) architecture, 1M context, and frontier-level agentic coding/knowledge work. GPQA 93.5%, FrontierSWE 81.2% — top open-weight reasoning.
- **Provider / access:** Kimi platform API (`kimi-k3`), Kimi Code CLI; 17 API providers tracked by Artificial Analysis; full open weights on Hugging Face under the Kimi K3 License (commercial use allowed with restrictions).
- **Release / knowledge:** Released 2026-07-16; knowledge cutoff not published.
- **IDs:** `kimi-k3` (Kimi API; reasoning_effort low/high/max; preserved-thinking mode).
- **Context window:** 1,048,576 tokens (1M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image input (native vision; video understanding claimed in card — AA lists text+image), text output; reasoning (thinking always enabled); tool calls; MCP support.
- **Pricing (as of 2026-11-03):** $3.00 input / $15.00 output per 1M tokens (Kimi API), 90% cache discount (blended ~$2.31).
- **Architecture:** 2.8T total / 104B active MoE, 93 layers (69 KDA + 24 Gated MLA), 896 experts (16 routed + 2 shared), 401M MoonViT-V2 vision encoder, MXFP4 quantization-aware training; Kimi K3 License, open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.2%**; DeepSearchQA: **95.0%**; MCPMark-Verified: **94.5%**; MCP-Atlas: **84.2%**; Toolathlon-Verified: **76.5%**; Harvey Lab-AA: **94.6%**; ResearchRubrics: **76.2%**
- Terminal-Bench 2.1: **88.3%** (Kimi) vs **85%** (AA) vs **80.9%** (Vals — conflicting harnesses)
- GDPval-AA v2: **1686 Elo** (Kimi) vs 1584 (AA); APEX-Agents: 41.0%; AutomationBench: 30.8%; JobBench: 54.3%; Agents' Last Exam: 28.3%
- OSWorld-Verified: **84.8%**; SaaS-Bench: 60.1%; τ³-Banking: 33.4%; Finch: 77.3% (Mistral-cited); b3 Agent Security: 88.0%

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Kimi/AA) vs **92.9%** (Vals); HLE: **56.0%** with tools (Kimi) vs **46.9%** (AA)
- AA-LCR: **88.7%**; CritPt: **23.4%**; ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (ARC Prize)
- Artificial Analysis Intelligence Index: **43.6%** (AA); OmniDocBench: 91.1%; Video-MME (w. sub): 90.0%; MMVU: 82.1%
- AA-Omniscience: accuracy 47.6%, hallucination rate 53.2%; Gray Swan IPI (15 attempts): **52.7%** (weak prompt-injection robustness)

Coding:

- FrontierSWE: **81.2%**; ProgramBench: **77.8%**; Terminal-Bench 2.1 88.3%; Kimi Code Bench 2.0: **72.9%**; SWE-Marathon: **42.0%**; DeepSWE: **67.5%**
- SWE-bench: **93.4%**; LiveCodeBench: **87.2%** (Vals); AA-SciCode: **59.5%**; AA Coding Index: **76.2%**; FrontierSWE v2: 25.9%; FrontierCode 2.0: 17.7%

Long context:

- 1M window; AA-LCR 88.7% (best-in-class open); no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in (native vision); MathVision 94.3%/97.8% (w/ Python); CharXiv 91.3% (tools); BabyVision 85.7% (w/ Python); MMMU-Pro 81.6%/83.4%; PerceptionBench 58.5%; ZeroBench 23%/41% (w/ Python).

### Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 91.2%, MCPMark 94.5%, OSWorld-Verified 84.8%, Harvey Lab 94.6% — elite open agentic; capped by AutomationBench 30.8%, Agents' Last Exam 28.3%, and TB2.1 harness variance.
- **Reasoning: 90/100.** GPQA 93.5%, HLE 56% with tools, LCR 88.7% — frontier-class; capped by ARC-AGI-2 60.4%, CritPt 23.4%, and II 43.6.
- **Context window: 94/100.** 1M with top open LCR 88.7%; no ≥98%-retrieval figure at depth.
- **Multimodal: 88/100.** Native image input with excellent visual-math/chart understanding (MathVision 97.8% w/ Python, CharXiv 91.3%); no audio input, text-only output.
- **Coding: 90/100.** FrontierSWE 81.2%, ProgramBench 77.8%, SWE-bench 93.4%, SWE-Marathon 42% — top open coding; capped by FrontierCode 2.0 17.7% and FrontierSWE v2 25.9%.
- **Cost efficiency: 70/100.** $3/$15 — premium for open weights (vs MiMo $0.435/$0.87); 62.4 t/s.
- **Overall Score: 90/100.** Mean of (90+90+94+88+90)/5 = 90.4 → 90. The strongest open-weight flagship researched so far (frontier reasoning/coding); price and prompt-injection weakness are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Moonshot AI Kimi K3 model card + launch blog + report, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, HLE, GDPval) listed side by side.
- Reference URLs:
  - [Kimi K3 model card + full report (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi K3 launch blog (Moonshot AI)](https://www.kimi.com/blog/kimi-k3)
  - [Kimi K3 — Artificial Analysis model page ($3/$15, 1M, 2.8T/104B)](https://artificialanalysis.ai/models/kimi-k3)
  - [Kimi K3 — BenchLM benchmark aggregation](https://benchlm.ai/models/kimi-k3)
  - [Kimi K3 — Vals AI model page](https://www.vals.ai/models/kimi_kimi-k3)
  - [ARC Prize results — Kimi K3](https://arcprize.org/results/moonshot-kimi-k3)
