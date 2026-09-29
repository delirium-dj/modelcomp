# Qwen3.8 Flash-Next — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash-Next
- **Short description:** Qwen's open-weight multimodal MoE model focused on cost-efficient long-context reasoning, coding, and agent execution, with a native 262K context and a documented YaRN extension path to 1M.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next`; Qwen Cloud / Alibaba Cloud Model Studio for the hosted `Qwen3.8-Flash` production version; local OpenAI-compatible serving through vLLM, SGLang, and TokenSpeed.
- **Release / knowledge:** Hugging Face metadata shows repository creation on 2026-08-24; Artificial Analysis lists the release as 2026-08-26. No reliable knowledge cutoff was shown.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`; hosted `Qwen3.8-Flash`; OpenCode Zen `qwen3.8-flash`.
- **Context window:** **262,144 tokens natively, extensible up to 1,000,000** via the documented YaRN RoPE configuration (`factor: 4.0`, `original_max_position_embeddings: 262144`) or a reduced `factor: 2.0` for ~524K serving. Artificial Analysis measures a 256K window for the evaluated configuration. The model card advises that all major frameworks implement *static* YaRN, so the scaling factor stays constant regardless of input length and can hurt short-text performance; it should only be enabled when long contexts are actually needed.
- **Modalities:** Text, image, and video input; text output; thinking mode on by default with `reasoning_effort` control (**xhigh, medium, low**). The card documents long-video processing (raising `longest_edge` in `video_preprocessor_config.json` to 469,762,048 for hour-scale videos) and separate vision templates.
- **Pricing (as of 2026-09-29):** Hosted price is **$0.113 input / $0.382 output per 1M tokens** for Qwen3.8-Flash. Independent Artificial Analysis figures are $0.15/$0.47 with an 89% cache discount, $0.37 per Intelligence Index task. Self-hosting avoids a vendor token price but hardware and Qwen Community License 1.0 terms still apply.
- **Architecture:** Qwen4Exp conditional-generation architecture with a vision encoder. **125B language-model parameters with 6B activated**, plus **51B n-gram embedding** parameters and a **4B MTP** module. Hidden dimension 2560, 48 layers laid out as 12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention → MoE)). MoE has 512 experts with 10 routed + 1 shared activated. 180B total parameters is the figure Artificial Analysis reports (including the non-activated n-gram embedding table). Open weights under `qwen-community-1.0`. This **corrects** the earlier "500B size class" claim, which the official model overview table refutes.

### Raw benchmarks found

Agent / tool use:

- DeepSWE 1.1: **58.7%** (Qwen3.8-Flash-Next Hugging Face model card; Claude Code / mini-SWE-agent, best of two, 256K context; best result on mini-SWE-agent)
- SWE-bench Pro: **62.5%** (model card; Claude Code, 256K context, refined benchmark)
- **Toolathlon Verified (Pass@1): 73.5%** (official model-card comparison table)
- CoWorkBench: **73.9%**; JobBench: **55.7%** (official model-card comparison table)
- Agents' Last Exam: **24.3 Pass@1 / 51.2 score** (official model-card comparison table)
- Terminal-Bench, Tau3-Banking, GDPval-AA, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card)
- HLE: **35.9%** (model card; GPT-4o judge, not the task's default grader)
- IFBench instruction following: **81.3%** (official model-card comparison table)
- **Artificial Analysis Intelligence Index: 40** on **v4.3.2**, rank **#40/113** overall and **#6/116** in its open-weight class (Artificial Analysis, accessed 2026-09-29). Per the current AA breakdown, the index is built from AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, and AA-LCR v1.1.
- Measured latency **TTFT 2.50 s** and output speed **58.1 tok/s** on Alibaba's API; verbosity **240M** output tokens on the Intelligence Index versus a 140M class median (Artificial Analysis, 2026-09-29).
- LCR/MLCR, CritPt, and hallucination metrics as standalone values: **no verified public exact value found**

Coding:

- DeepSWE 1.1: **58.7%**; SWE-bench Pro: **62.5%**; LiveCodeBench v6: **91.9** (model-card benchmark table)
- **SWE-bench Multilingual: 81.0%** (official model-card comparison table; mini-SWE-agent, 256K context)
- NL2Repo-Bench: **48.1%** (official model-card comparison table)
- ClawEval-MM: **64.4 Pass@3 / 60.4 average** (model card)
- ExtractBench mean: **89.88** (short), **87.81** (medium), **94.82** (long); served checkpoint `Qwen3.8-Flash-Next-FP8`
- SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native context: **262,144 tokens**, documented extension to **1,000,000** via YaRN (official model card).
- Artificial Analysis reports a **256K** context window and publishes **AA-LCR v1.1** (long-context reasoning) and **MLCR-AA** (medical long-context reasoning) as component evaluations of the v4.3.2 index. The per-benchmark AA-LCR and MLCR values for this exact model are not exposed on the public model page, so the retrieval strength is carried by the index rather than a standalone retrieval number.
- No standalone exact-model RULER or MRCR/GraphWalks score was found in the reviewed public sources.

Multimodal:

- RecreationBench: **49.9**; AndroidWorld: **84.5**; OSWorld 2.0: **19.4 binary / 52.3 partial**; Vision2Web: **64.0**; ERQA: **72.3** (official model-card comparison table)
- **LVBench (long video understanding): 76.6%**; RealWorldQA: **88.5%** (official model-card comparison table)
- MathVision: **90.6 without CI / 95.7 with CI**; CharXiv (RQ): **84.6 without CI / 90.6 with CI** (official model-card comparison table; ground-truth annotations manually corrected after verification)

Sources consulted: [Qwen3.8 Flash-Next Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) and [Artificial Analysis Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next), accessed 2026-09-29. Benchmark values are source/model-card values, not peer findings.

### Normalized scores (1–100)

- **Tool use: 90/100.** Toolathlon Verified 73.5%, CoWorkBench 73.9%, SWE-bench Pro 62.5%, JobBench 55.7%, and explicit tool-call/agent serving controls provide strong multi-source evidence; exact Terminal-Bench, Tau, GDPval, and MCP values remain unavailable.
- **Reasoning: 88/100.** GPQA Diamond 91.7% and IFBench 81.3% are strong, the v4.3.2 Intelligence Index of 40 (#40/113) is high for a 6B-active model, while HLE 35.9% is lower and uses a different judge.
- **Context window: 85/100.** The 262K native window is verified and the 1M YaRN extension is documented with explicit framework recipes and honest caveats about static scaling; the score stops short of the 1M tier because no measured retrieval-at-extended-length result was published.
- **Multimodal: 95/100.** Text, image, and video input with text output, backed by a broad exact-model vision set (LVBench 76.6, RealWorldQA 88.5, MathVision 95.7 with CI, CharXiv 90.6 with CI) plus documented hour-scale video sampling guidance.
- **Coding: 89/100.** DeepSWE 58.7%, SWE-bench Pro 62.5%, SWE-bench Multilingual 81.0%, NL2Repo-Bench 48.1%, and LiveCodeBench v6 91.9 provide strong multi-harness coding evidence; exact SWE-bench Verified and SciCode values are absent.
- **Cost efficiency: 90/100.** A hosted $0.113/$0.382 per 1M with an 89% cache discount and $0.37 per Intelligence Index task is inexpensive for this capability level; hardware and `qwen-community-1.0` license obligations prevent treating open weights as free.
- **Overall Score: 89.4/100.** (90 + 88 + 85 + 95 + 89) / 5 = 447 / 5 = 89.4. Cost efficiency is excluded from this mean. Best fit: self-hosted or low-cost hosted multimodal coding agents and long-context workflows where Qwen's vision/video support and open weights are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: the official Qwen3.8-Flash-Next Hugging Face model card and its comparison tables, plus Artificial Analysis v4.3.2 measurements; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Qwen3_8_Flash_Next.md`, using the same headings.
