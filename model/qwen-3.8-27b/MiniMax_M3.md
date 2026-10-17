# Qwen 3.8 27B — findings by MiniMax M3

- Source: Alibaba Qwen Team (`Qwen/Qwen3.8-27B` / `qwen/qwen3.8-27b` / `opencode/qwen-3.8-27b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's **2026-08-14** open-weights **Apache-2.0** dense **27B** (28B w/ vision encoder) vision-language model — the single-GPU distillation of the 2.4T Qwen 3.8 Max flagship. Native **262,144** context (extensible to **1,000,000** via YaRN), text + image + video input. **GPQA Diamond 90.5% (AA)** and **SWE-bench 86.0% (Vals)** are the headline independent reruns; hosted Alibaba API at **$0.50 in / $3.00 out** per 1M with **80% cache discount**.
- **Provider / access:** Hugging Face (open weights, Apache-2.0, BF16 55.6 GB / 18 shards); OrcaRouter pass-through at **$0.33 in / $2.40 out**; Alibaba Cloud Model Studio `qwen3.8-27b` (hosted); 12 API providers in total; **no OpenCode Zen Free ID**. ([HF](https://huggingface.co/Qwen/Qwen3.8-27B), [OrcaRouter](https://www.orcarouter.ai/blog/qwen-3-8-27b-huggingface))
- **Release / knowledge:** **2026-08-14** (open weights, Apache-2.0); knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (HF), `qwen/qwen3.8-27b` (OpenRouter, OrcaRouter); no Zen Free ID.
- **Context window:** **262,144 native / 1,000,000 via YaRN**; hosted version with 1M default context per model card note. ([OrcaRouter repo walkthrough](https://www.orcarouter.ai/blog/qwen-3-8-27b-huggingface))
- **Modalities:** **Text + image + video input → text output.** Vision encoder adds 1B to the parameter count (28B total). Function calling, structured output, tool use, context caching supported; reasoning on by default (xhigh variant on AA).
- **Pricing (as of 2026-10-16):** **Self-host = free** (Apache-2.0); Alibaba hosted **$0.50 / $3.00** per 1M, **80% cache discount**, **$1.01/Intelligence Index task**; OrcaRouter pass-through **$0.33 / $2.40**. ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-27b))
- **Architecture:** **Dense 27B** (28B w/ vision encoder), 64 layers, hidden 5,120, vocab 248,320. **Hybrid attention**: 48 Gated DeltaNet (linear) + 16 Gated Attention (3:1 split), multi-token prediction trained. ([OrcaRouter](https://www.orcarouter.ai/blog/qwen-3-8-27b-huggingface))

### Raw benchmarks found

Triangulated across **five** independent surfaces: Alibaba/Hugging Face official model card (vendor-reported), Artificial Analysis xhigh independent rerun (composite), Vals AI independent rerun, BenchLM aggregator (68/638 rows), OpenRouter benchmarks. The Aug-15 report from OrcaRouter and the Aug-14 report from Yotta both confirm the model card figures are still vendor-attributed and not yet independently reproduced in full.

Agent / tool use:

- **Alibaba model card**: Terminal-Bench 2.1 **73.0%**, OSWorld-Verified **84.3%**, WebArena-Verified **64.8%**, AndroidWorld **81.9%**, CoWorkBench **70.7%**, JobBench **33.4%**, Agents' Last Exam **42.9%**.
- **Artificial Analysis independent (xhigh)**: TerminalBench 2.1 **79.8%** (different harness, +6.8 over card), Terminal-Bench **4.0** **5.6%** (very low), AA Agentic Index **46.5%**, AA Tau3 Banking **48.0%**, AA AutomationBench **48.2%**, AA EnterpriseOps-Gym **44.2%**, AA Briefcase Elo **1397**, GDPval-AA Elo **1420** / normalized **46.0%**, GDP.pdf **16.4%** (low).
- **Vals AI independent**: Terminal-Bench 2.1 (Vals harness) **58.4%** — 14.6-pt drop vs Alibaba's harness on the same workflow class.

Reasoning / knowledge:

- **GPQA Diamond**: **89.2%** (Alibaba card) / **90.5%** (AA) / **88.9%** (Vals) — within 1.6 pt across all three; clears the 88 floor.
- **MMLU-Pro**: **84.3%** (Vals).
- **HLE**: **30.8%** (Alibaba) / **33.9%** (AA) — mid-tier.
- **Artificial Analysis Intelligence Index v4.3.2** (10-eval composite): **34** (xhigh; **#1 of 14** open-weights small class 4B-40B; class median 8) — strong *for the class*, modest vs full field. ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-27b))
- **AA-Omniscience Index**: **-10.0** (negative — more wrong than right) / Accuracy **15.6%** / Hallucination Rate **30.3%** — weakest axis.
- **CritPt**: **5.4%** (very low).
- **AA-LCR v1.1**: **82.0%** (high).
- **MLCR-AA**: **21.7%** (low).
- **BenchLM Overall 59.62/100** ranks Qwen3.8-27B at #58/951 (the aggregator's own composite; partial coverage noted).

Coding:

- **LiveCodeBench v6**: **90.3%** (Alibaba card) / **84.0%** (Vals).
- **SWE-bench Pro**: **61.7%** (Alibaba card).
- **SWE-bench (Vals harness)**: **86.0%** — Vals's independent rerun.
- **DeepSWE 1.1**: **42.2%** (vs **13.3%** for Qwen3.6-27B predecessor — a +28.9-pt leap).
- **NL2Repo**: **42.3%** (low).
- **VulcanBench v3**: **82.6%**.
- **AA-SciCode**: **46.6%**; AA Coding Index **68.1%**.

Multimodal / grounded:

- **MathVision**: **90.0%**; MathVision w/ Python **94.6%**.
- **CharXiv**: **90.2%**; CharXiv w/o tools **83.7%**.
- **OmniDocBench 1.5**: **91.1%**; RealWorldQA **85.9%**.
- **BabyVision**: **65.7%** / w/ Python **85.6%**.
- **AA-MMMU-Pro**: **76.3%** (independent).
- **ERQA**: **65.5%**; Vision2Web **62.9%**.

Operational:

- **Speed**: 41.1 t/s output (AA; #52/63 open-weights small; class median 77 t/s) — notably slow.
- **TTFT**: 3.96s (AA; class median 1.07s) — slow.
- **Verbosity**: 200M output tokens from Intelligence Index (class median 82M) — very verbose.
- **KV cache / context**: 262K native; YaRN to 1M verified; AA-LCR 82.0 strong on long-context reasoning, MLCR-AA 21.7 weak on medical long-context.
- **VRAM ladder** (BF16 → 4-bit): ~56 GB → ~28 GB (FP8) → ~14-16 GB (Q4_K_M).

Pricing compared to peers (current as of 2026-10-16):

- **vs Qwen 3.8 Max ($2/$6)**: self-hosting is **free** vs Max's $2/$6 API — pure economics win on volume.
- **vs Qwen 3.6-27B predecessor ($0.60/$3.60)**: same hosted cost band with 80% cache discount vs no discount; cheaper at scale.
- **vs DeepSeek V4 Flash ($0.14/$0.28)**: 27B is **3.6× more** input, **10.7× more** output hosted — but you can self-host and erase that.
- **vs GLM 5.3 Flash (free Zen tier)**: 27B is paid or self-hosted; GLM has free Zen. No Zen Free ID for 27B.
- **vs Muse Spark 1.1 ($1.25/$4.25)**: 27B hosted at **2.5× cheaper** input, **1.4× cheaper** output.

### Normalized scores (1–100)

- **Tool use: 78/100.** Mixed evidence: Alibaba harness TB2.1 73.0 + OSWorld-V 84.3 + AndroidWorld 81.9 + CoWorkBench 70.7 are *strong*; AA TerminalBench21 79.8 (different harness) confirms TB strength; but AA Terminal-Bench **4.0** **5.6%**, JobBench 33.4, GDP.pdf 16.4 are *weak* — the new TB 4.0 floor is what caps the agentic ceiling.
- **Reasoning: 72/100.** GPQA Diamond 88.9-90.5 (solid), MMLU-Pro 84.3 (solid), AA Intelligence Index 34 *class-leading for 27B* but middling in absolute terms; HLE 30.8-33.9 mid-tier; AA-Omniscience Index **-10.0** (negative — major weakness), CritPt **5.4%**, AA-Omniscience Accuracy 15.6 are significant drags.
- **Context window: 88/100.** 262K native + 1M via YaRN is a *large* context window for a 27B; AA-LCR **82.0** confirms strong retrieval; MLCR-AA 21.7 (medical long-context) is the weak spot; Apache-2.0 means the 1M extension is yours to deploy.
- **Multimodal: 88/100.** Native text + image + video; MathVision 90 + MathVision w/ Python 94.6 + CharXiv 90.2 + OmniDocBench 91.1 + RealWorldQA 85.9 are a strong cluster; AA-MMMU-Pro 76.3 (independent), Vision2Web 62.9, ERQA 65.5 keep it out of the 90+ band.
- **Coding: 82/100.** LiveCodeBench v6 90.3 (strong), SWE-bench Vals **86.0** (strong), SWE-Pro 61.7 (mid), DeepSWE 1.1 42.2 (+28.9 vs predecessor — big gain), Terminal-Bench 2.1 73.0; VulcanBench 82.6 is strong; NL2Repo 42.3 and SciCode 46.6 are weaknesses that cap coding under 85.
- **Cost efficiency: 95/100.** **Apache-2.0 self-host = free** is the unbeatable price; even the hosted Alibaba at $0.50/$3.00 with **80% cache discount** + OrcaRouter pass-through at $0.33/$2.40 are competitive vs frontier API pricing; only the slower 41.1 t/s and very verbose 200M output tokens modestly cap throughput-per-dollar.
- **Overall Score: 82/100** Half-up mean of the five non-cost dims: (78 + 72 + 88 + 88 + 82) / 5 = 81.6 → **82**. Best fit: single-GPU agentic coding and multimodal work where Apache-2.0 redistribution + 262K native context + OSWorld-Verified 84.3 + SWE-bench Vals 86.0 + LiveCodeBench 90.3 deliver frontier-class 27B economics. Watch for: Qwen 4 27B successor announced at Apsara September 22 (date TBD). Twin file `Qwen_3.8_27B.md` (2026-09-27) gave **71** — that score used the pre-comprehensive-data cut (AA Index 34 with no Vals SWE-bench 86.0, no Alibaba OSWorld-V 84.3, no DeepSWE 42.2, no LiveCodeBench v6 90.3 available); my 82 reflects the now-fully-published benchmark set and is the documented correction.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Five-source triangulation (Alibaba HF model card, Artificial Analysis xhigh independent composite + per-eval, Vals AI independent harness, BenchLM 68-row coverage, OpenRouter benchmarks). Identity resolved: this is the Qwen 3.8 27B production Apache-2.0 open-weights release of **2026-08-14**; it is *not* Qwen 3.8 Max (89.4 overall, 2.4T MoE API-only), nor Qwen 3.8 Flash (84 overall, hosted MoE 125B/6B-active), nor Qwen 3.8 Flash-Next (85, separate open-weight preview). Scores are normalized 1–100 interpretations, not official vendor scores. Twin file `Qwen_3.8_27B.md` (also this model, dated 2026-09-27) gave 71; corrected to 82 with the now-published full benchmark set.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

