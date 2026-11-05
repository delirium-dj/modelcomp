# Kimi K3 — findings by Kimi K3.1 Pro

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's previous-generation open-weight flagship for long-horizon coding, knowledge work, reasoning, and native visual understanding. This report covers K3, not the newer K3.1 Pro reporter identity.
- **Provider / access:** Kimi.ai, Kimi Work, Kimi Code, Kimi API, enterprise deployments, downloadable weights, and numerous OpenRouter inference providers. Artificial Analysis marks K3 deprecated in favor of K3.1 Pro but continues less-frequent benchmarking; the model remains listed by API providers.
- **Release / knowledge:** Launched 2026-07-16; full weights released by 2026-07-27. A verified official knowledge-cutoff date was not found.
- **IDs:** Kimi API `kimi-k3`; OpenRouter `moonshotai/kimi-k3`; Hugging Face `moonshotai/Kimi-K3`. No free OpenCode Zen ID was verified.
- **Context window:** 1,048,576 tokens. Moonshot's launch material does not state a separate output cap; some hosting providers advertise 128K output, but that is not treated as an official universal limit.
- **Modalities:** Native text, image, and video understanding with text output; reasoning effort, streaming, tool calling, structured output, prefix continuation, and context caching are documented. No native audio-input claim was verified.
- **Pricing:** Official API $3 cache-miss input / $0.30 cache-hit input / $15 output per 1M tokens, with no context-length tier. OpenRouter spans many provider configurations, roughly $0.155–$4.50 input and $9.50–$22.50 output; these are not equivalent service/quantization tiers.
- **Architecture / license:** Open-weight MoE with 2.8T total and 104B active parameters, 93 layers (69 KDA plus 24 Gated MLA), 896 routed experts with 16 selected plus two shared experts, Attention Residuals, 401M-parameter MoonViT-V2, and MXFP4-weight/MXFP8-activation quantization-aware training. Custom Kimi K3 License. Moonshot recommends supernodes with 64 or more accelerators for efficient deployment.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%** (official model card, max reasoning).
- BrowseComp: **91.2% with 300K context compaction**; Moonshot separately reports **90.4% with the full 1M window and no context management**.
- MCP Atlas: **84.2%** on the 500-task public subset with a 100-turn limit; MCPMark-Verified: **94.5%**; Toolathlon-Verified: **76.5%**.
- GDPval-AA v2: **1,686 Elo**; AA-Briefcase: **1,548 Elo**; Agents' Last Exam: **28.3%**.
- AutomationBench: **30.8%** on the 600-task public subset, showing substantially weaker end-to-end SaaS completion than the research/tool results.

Reasoning / knowledge:

- GPQA Diamond: **93.5% at max** (official model card).
- HLE-Full: **43.5% without tools / 56.0% with tools** in the launch model card; later source-linked runs report **46.9% without tools** (2026-09-20) and **59.8% with tools** (2026-09-10). Runs are retained separately.
- CritPt: **23.4%**, cited from Artificial Analysis as of 2026-07-23.
- Artificial Analysis Intelligence Index: **57.11** in a verified 2026-07-21 pre-v5 record, including GPQA 93.5%, AA-LCR 74.7%, HLE 44.3%, and CritPt 23.4%. The current deprecated-model v5.0.1 page reports **N/A**, so no current composite is inferred.

Coding:

- Terminal-Bench 2.1: **88.3% with Kimi Code** at max. Terminal-Bench 4.0 separately reports **21.5%** in a later 2026-09-10 record; these are different versions and harnesses.
- DeepSWE 1.1: **67.5% with Kimi Code** and **67.3% with mini-SWE-agent**.
- ProgramBench: **77.8% with Kimi Code**; FrontierSWE: **81.2 dominance score**; SWE-Marathon: **42.0%** on Moonshot's H20-calibrated pre-v1.1 task branch with Claude Code.
- SWE-bench Verified: third-party harnesses report **76.8%** and **93.4%**. Moonshot did not publish an official K3 row in its main table; the 93.4% Vals-linked record has 1.11-point standard error and $0.76/test. The large harness discrepancy is preserved rather than averaged.
- SciCode: **58.7%**; PostTrainBench: **36.6%**; MLS-Bench-Lite: **48.3%**.

Long context:

- AA-LCR: **74.7%** in the launch model card (Artificial Analysis, 2026-07-23) versus **88.7% at max** in a later 2026-09-20 source-linked record. Dates/configurations differ.
- The 1,048,576-token window is officially verified. No exact-K3 public MRCR or Graphwalks series was found in the cited model card.

Multimodal:

- MMMU-Pro: **81.6% without Python / 83.4% with Python** (official launch model card).
- Video-MME with subtitles: **90.0%**; MMVU: **82.1%**.
- OmniDocBench: **91.1%**; PerceptionBench: **58.5%**; WorldVQA ForceAnswer: **51.0%**.
- MathVision: **94.3% without / 97.8% with Python**; CharXiv RQ: **84.8% / 91.3%**; ZeroBench Pass@5: **23.0% / 41.0%**. Tool-augmented values are not conflated with unaided results.

### Normalized scores (1–100)

- **Tool use: 92/100.** OSWorld 84.8%, BrowseComp 90.4–91.2%, MCP Atlas 84.2%, and strong professional-work results demonstrate frontier agency; AutomationBench 30.8% and Agents' Last Exam 28.3% cap long-horizon reliability.
- **Reasoning: 91/100.** GPQA 93.5%, HLE up to 56.0% with tools at launch, and the strong historical composite indicate frontier reasoning; lower unaided HLE/CritPt and the absence of a current v5.0.1 index cap the score.
- **Context window: 94/100.** The verified 1.05M window and later AA-LCR 88.7% are excellent; the earlier 74.7% result and missing MRCR/Graphwalks evidence prevent a higher rating.
- **Multimodal: 92/100.** Strong MMMU-Pro, video, document, chart, and math-vision results across native text/image/video input support an excellent score; weaker perception/ZeroBench results and no audio input cap it.
- **Coding: 89/100.** Terminal-Bench 2.1 88.3%, ProgramBench 77.8%, and FrontierSWE 81.2 are excellent; Terminal-Bench 4.0 21.5%, SWE-Marathon 42.0%, and the 76.8–93.4% SWE-bench harness spread reduce confidence.
- **Cost efficiency: 68/100.** A 90% official cache discount and cheaper third-party hosting help, but $3/$15 official pricing, high output prices, and extremely demanding self-hosting requirements make K3 costly for an open-weight model.
- **Overall Score: 91.6/100.** Half-up mean of 92, 91, 94, 92, and 89; best fit for open-weight long-context coding, research agents, computer use, and visually rich knowledge work where harness compatibility and infrastructure are well managed.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-05
- Method: Independent public internet research using Moonshot's official quickstart, launch blog, Hugging Face model card and footnotes, Artificial Analysis, OpenRouter, and source-linked BenchmarkList/third-party harness records; scores are normalized 1–100 interpretations, not official vendor scores. Only exact Kimi K3 evidence is used; K3.1 Pro results are excluded.
- Reference URLs:
  - [Kimi API — Kimi K3 quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [Moonshot AI — Kimi K3 technical blog](https://www.kimi.ai/blog/kimi-k3)
  - [Hugging Face — Kimi K3 model card](https://huggingface.co/moonshotai/Kimi-K3)
  - [Artificial Analysis — Kimi K3 (max)](https://artificialanalysis.ai/models/kimi-k3)
  - [OpenRouter — Kimi K3](https://openrouter.ai/moonshotai/kimi-k3)
  - [BenchmarkList — Kimi K3 evaluations](https://benchmarklist.com/models/moonshotai-kimi-k3/)
- Future sources: add a new file next to this one using the same headings.
