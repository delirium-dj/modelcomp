# Qwen3.8-27B — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B`, Apache 2.0 open weights)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's 27B dense open-weight vision-language model — the Qwen 3.8 family's open release, compressing the Qwen3.8-Max flagship's training recipe into a single-GPU-class model; strongest use cases are agentic coding, computer use and vision reasoning. BenchLM ranks it #54 of 889 (58.27) — best-in-table open-weights model in its size class. A Perplexity fine-tune (`pplx-decider-v1-27b`) now exists as a typed-decision derivative (benchlm decision panel, outside general rankings).
- **Provider / access:** Free Apache 2.0 weights on Hugging Face (`Qwen/Qwen3.8-27B`); hosted access via gateways (e.g. OrcaRouter, $0.33/$2.40 per 1M in/out with 262K context); OpenAI-compatible Chat Completions API on hosted platforms. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-14 on Hugging Face (Day-0 AMD support); knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face / ModelScope); hosted `qwen3.8-27b` per gateway catalogs.
- **Context window:** 262,144 tokens native (verified via the Alibaba model card + BenchLM; 256K used in official eval runs), extensible to 1,000,000 with YaRN scaling; max output 32,768 tokens in official runs.
- **Modalities:** image and video input; text output; reasoning yes (thinking on by default / explicit reasoning mode); tool calls (official agentic runs used the Claude Code harness); JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-10-11):** free open weights under Apache 2.0 (~55.6GB BF16; 4-bit fits a 24GB card; 24.5 tok/s on Ryzen AI Max+ 395, 51.8 tok/s on Radeon AI PRO R9700 per AMD tests); hosted alternative $0.33 / $2.40 per 1M in/out.
- **Architecture:** 27B dense parameters (28B counting the vision encoder), 64 layers, hidden size 5120, hybrid attention (48 Gated DeltaNet linear-attention layers + 16 full-attention layers, 3:1 ratio), Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1423** (AA, independent — fills the gap the 2026-10-08 pass marked missing; normalized **46.2%**); AA-Briefcase: **1397 Elo** (AA)
- AA Terminal-Bench 2.1: **79.8%** (AA, independent — above the vendor's 73.0); vendor row: **73.0%**; Vals independent: **58.4%** (wide spread)
- AA Tau3-Banking: **48.0%** (AA — fills the Tau3 gap); AA AutomationBench-AA: **48.2%**; AA EnterpriseOps-Gym: **44.2%**; AA Agentic Index: **46.5%** (AA)
- OSWorld-Verified: **84.3%** (model card); AndroidWorld: **81.9%**; WebArena-Verified: **64.8%**; CoWorkBench: **70.7%**; JobBench: **33.4%**; Agents' Last Exam: **42.9** (model card)
- AA Terminal-Bench 4.0: **5.6%** (AA — very weak on the 2026 harness); AA GDP.pdf: **16.6%**
- Harvey legal-agent adapted run: **67%** on 250 legal tasks (Harvey/Engram study, Alibaba-stated; model trained on the test corpus first — provisional for stock weights)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (model card); AA independent: **90.5%**; Vals: **88.9%** — corroborated across three sources
- HLE: **30.8%** (model card); AA-HLE: **33.9%** (AA)
- Artificial Analysis Intelligence Index: **33.7** (AA current board — consistent with the 33.70 default-xhigh reading cited 2026-10-08; the "52 at max" effort-setting reading remains the outlier)
- AA-LCR v1.1: **82.0%** (AA — fills the long-context gap; strong for the class)
- MLCR-AA: **21.7%**; CritPt: **5.4%** (AA — weak)
- AA-Omniscience: **15.6% accuracy / 30.3% non-hallucination row / −10.0 index** (AA — very weak)
- MMLU-Pro: **84.3%** (Vals); IFBench: **79.5%** (model card)
- MathVision: **90.0%** / **94.6%** w/ Python (model card)

Coding:

- LiveCodeBench v6: **90.3%** (model card); LiveCodeBench (Vals): **84.0%**; SWE-bench (Vals): **86.0%** (Vals, independent — fills gaps)
- AA Coding Index: **68.1%** (AA); AA-SciCode: **46.6%** (AA); VulcanBench v3: **82.6%** (VulcanBench)
- SWE-bench Pro: **61.7%** (model card, Claude Code harness caveat); NL2Repo: **42.3%**; DeepSWE 1.1: **42.2%**
- Code Arena WebDev: **#9 overall, score 1595**; Image-to-WebDev: **#1 open model, #7 overall, 1574** (Arena.ai, independent — prior pass)
- SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- 262K native; AA-LCR v1.1 **82.0%** (AA — first measured long-context number, strong for the class)
- MRCR/RULER at window length: no verified public score; 1M YaRN remains a scaling claim

Multimodal:

- CharXiv: **90.2%** with tools / **83.7%** without; OmniDocBench 1.5: **91.1%**; AA-MMMU-Pro: **76.3%** (AA); RealWorldQA: **85.9%**; BabyVision: **65.7%**; Vision2Web: **62.9%**; ERQA: **65.5%** — vision corroborated

### Normalized scores (1–100)

- **Tool use: 81/100.** (Was 78 on the prior pass.) GDPval-AA 1423 and Tau3 48.0% fill the two largest prior gaps, and AA's TB2.1 79.8% lands above the vendor row; the Vals TB2.1 spread (58.4) and AA TB4.0 5.6% keep it under 85.
- **Reasoning: 80/100.** GPQA corroborated at 88.9–90.5% (three sources) and AA-LCR 82.0% is strong, but HLE 30.8–33.9%, CritPt 5.4%, MLCR 21.7% and the −10 Omniscience index hold the score at the band it earned.
- **Context window: 78/100.** 262K native tokens maps to the 200K–500K tier; AA-LCR 82.0% is excellent measured evidence for the window — the 1M YaRN extension stays an unmeasured scaling claim.
- **Multimodal: 82/100.** Native image + video input with corroborated vision (CharXiv 90.2, OmniDocBench 91.1, MMMU-Pro 76.3); text-only output; 75–90 band.
- **Coding: 82/100.** LiveCodeBench 84.0–90.3% (two sources), SWE-bench (Vals) 86.0% and the Arena.ai independent placements are elite signals for the size class; SWE Pro 61.7% and DeepSWE 42.2% trail frontier on deep engineering.
- **Cost efficiency: 97/100.** Free Apache 2.0 weights ($0/token self-hosted) and a cheap hosted fallback at $0.33/$2.40 per 1M put it near the ~$0.10/$0.20 = 97–99 methodology reference.
- **Overall Score: 80.6/100.** (Was 80 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (81 + 80 + 78 + 82 + 82) / 5 = 403/5 = 80.6 — nudged up on the 2026-10-11 second pass as GDPval/Tau3/AA-LCR rows convert tool and long-context gaps into measured evidence. Best-fit: self-hosted or cheap hosted agent model for screen-driven, tool-using coding workflows where open weights and GPU-friendly size matter more than frontier reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Qwen3.8-27B HF model card, Artificial Analysis independent boards (GDPval/Briefcase/Tau3/LCR/SciCode/Omniscience/MMMU-Pro) via benchlm.ai, Vals AI leaderboards, plus the prior 2026-09-24/10-08 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
