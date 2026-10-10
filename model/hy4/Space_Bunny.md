# Hy4 — findings by Space Bunny

- Source: Tencent Hunyuan (`hy4-preview` / `tencent/hy4`; high reasoning)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 75.0 → 67.0.** Two findings drive it, and the second is a structural problem with the evidence base rather than a new number.

> ### ⚠ Every agentic, reasoning, and coding figure for this model comes from one source
> **Twenty-nine of the thirty-one BenchLM rows for Hy4 preview are sourced to Tencent's own `benchmark-appendix.jpg`.** The only independent measurements are **Terminal-Bench 2.1 from Vals AI (55.1%)** and **CWE-bench v1 from Collinear (53.0%)**. There is **no Artificial Analysis row, no hallucination or Omniscience data, no LCR/MLCR, and no long-context retrieval benchmark** for this model.
>
> **Terminal-Bench 2.1: 85.4% (Tencent) against 55.1% (Vals AI) — a 30.3-point spread.** This is by far the largest vendor-versus-independent divergence recorded anywhere in this research effort (compare GLM-5.3 at 16.7 points, GLM-5.2 at 14.9, DeepSeek V4 Flash at 15.7). Where one vendor controls the entire evidence base and its single independent cross-check disagrees by 30 points, the vendor figure is not credited at face value.

Restated: **Tool 89 → 68**, **Reasoning 87 → 82**, **Context 97 → 90**, **Coding 87 → 80**, **Cost 90 → 88**, Multimodal unchanged at 15.

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent's open-weight MoE flagship for productivity, long-horizon coding, scientific research, and tool-using agents. **Its published numbers are strong and almost entirely self-reported; the one independent cross-check available disagrees sharply.**
- **Provider / access:** Hugging Face `tencent/Hy4-preview`; Tencent Cloud TokenHub / OpenRouter preview routes; local OpenAI-compatible vLLM and SGLang serving. **No OpenCode Zen Free ID.**
- **Release / knowledge:** Tencent's repository and BenchLM list **2026-08-28**. **Knowledge cutoff not disclosed** — unchanged after two passes.
- **IDs:** `hy4-preview`; `tencent/hy4`; `tencent/Hy4-preview`; `tencent/Hy4-preview-FP8`.
- **Context window:** **1M total; API limit documented as 960K input / 64K output** (Tencent TokenHub model list and FAQ, cross-checked against the official repository's 1M specification).
- **Modalities:** **Text in / text out.** Reasoning (high default, no-think option) and tool calls / function calling supported. **No image, audio, or video input is verified for this checkpoint.**
- **Pricing (verified 2026-10-10):** **Apache-2.0 open weights; no fixed first-party API token price published.** Self-hosting cost is workload-dependent; launch product promotions are not treated as permanent pricing.
- **Architecture:** MoE, **770B total / 49B active** backbone parameters plus 10B MTP (0.7B active); 78 layers, 256 routed experts plus a shared expert, top-8 routing; **Apache-2.0**.

### Raw benchmarks found

> **Source labelling is essential for this model.** *(Tencent)* = Tencent's own benchmark appendix. *(Vals)* = Vals AI, independent. *(Collinear)* = CWE-bench leaderboard, independent.

**Agent / tool use — all Tencent-sourced except one Vals AI row:**

- **Terminal-Bench 2.1: 85.4% *(Tencent, Claude Code harness, up to 500 turns, 12-hour timeout)* against 55.1% *(Vals AI)*** — **30.3-point spread**
- MCP-Atlas **83.7%**; Toolathlon Verified **74.1%**; BankerToolBench **78.6%**; skillsBench **62.9%** *(all Tencent)*
- GDPval-AA v2 **Elo 1,678** *(Tencent)*; CyberGym **78.4%** *(Tencent)*
- **DRACO 77.2%** *(Tencent)* — new
- **JobBench 61.7%** *(Tencent)* — new
- **AutomationBench 32.1%** *(Tencent)* — new
- APEX-Agents **37.1%**; **Agents' Last Exam 22.8%** *(Tencent)*
- Tau3-Banking, Claw-Eval, ClawProBench: **no verified public exact value found**

**Reasoning / knowledge — all Tencent-sourced:**

- GPQA Diamond **92.3%** *(Tencent)*; HLE with tools **55.4%** / without tools **43.4%** *(Tencent)*
- WideResearch **83.9%** *(Tencent)*; **Apex 74.2%** *(Tencent)* — new
- **CritPt 16.9%** *(Tencent)*; OfficeQA Pro **66.2%**; SUPERChem **66.4%**; ArXivMath **66.6%** *(Tencent)*
- **LCR/MLCR, all hallucination metrics, and the Artificial Analysis Intelligence Index: still no verified public value** after two passes

**Coding:**

- SWE-bench Pro **65.7%**; SWE-bench Multilingual resolved **82.9%**; DeepSWE **64.3%**; NL2Repo **58.9%** *(Tencent)*
- **CWE-bench v1: 53.0%** *(Collinear — one of only two independent measurements for this model)*
- SWE Atlas Codebase QnA **64.0%** *(Tencent)*; **PostTrain Bench 35.6%** *(Tencent)* — new
- ProgramBench **17.5%**; SWE-Marathon **31.9%** *(Tencent)*
- **SWE-bench Verified, LiveCodeBench, SciCode, Vibe Code Bench: no verified public exact value found**

**Long context:** **1M total / 960K input / 64K output** is verified by Tencent's API limits and official repository. **No independent MRCR, RULER, or GraphWalks retrieval score exists** — unchanged after two passes.

**BenchLM composite: 61.36/100, #48 of 889** (31 of 625 benchmarks; conservative). Tencent family: **Hy3 52.75**, Hy3 Preview 52.50.

Sources consulted: [BenchLM Hy4 preview (updated 2026-10-10)](https://benchlm.ai/models/hy4-preview), [Tencent Hy4 preview repository and benchmark appendix](https://github.com/Tencent-Hunyuan/Hy4-preview/blob/main/assets/benchmark-appendix.jpg), [Hy4 preview Hugging Face model card](https://huggingface.co/tencent/Hy4-preview), [Vals AI Tencent Hy4 preview](https://www.vals.ai/models/tencent_hy4-preview), and [CWE-bench v1 leaderboard](https://cwe-bench.com/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 68/100.** **Down from 89 — a 21-point correction, driven by evidence provenance rather than by new negative results.** Tencent's figures are genuinely strong: **MCP-Atlas 83.7%, Toolathlon Verified 74.1%, BankerToolBench 78.6%, GDPval-AA Elo 1,678, Terminal-Bench 85.4%**. But **all of them come from the same appendix**, and the one place an independent lab has run this model — **Terminal-Bench 2.1, where Vals AI reads 55.1% against Tencent's 85.4%** — disagrees by **30.3 points**. That is too large a gap to attribute to harness variance. **Agents' Last Exam 22.8%, AutomationBench 32.1%, and APEX-Agents 37.1%** also show sustained professional work is the weak axis. **DRACO 77.2%** and **JobBench 61.7%** are new positives and are credited. The score stays mid-high on the volume and quality of published agentic results; it falls because none of them has been independently reproduced.
- **Reasoning: 82/100.** Down from 87. **GPQA Diamond 92.3%** is one of the strongest figures in this batch, and **HLE at 55.4% with tools / 43.4% without** is strong — for scale, GLM-5.3 reads 42.3% and DeepSeek V4 Flash 34.8–38.6% on the same benchmark. **WideResearch 83.9%** and **Apex 74.2%** are solid additions. The reductions: **CritPt 16.9%** is weak, and **the model has no published hallucination rate, no Omniscience index, and no AA Intelligence Index after two passes of research** — while every comparable model in this batch has been measured between 24.7% and 93.0%. **Absence of evidence is being scored as absence of a liability**, which is generous but is the only defensible treatment; it also means the reliability picture is genuinely unknown, and a 770B-parameter model with an undisclosed cutoff is not one to trust on facts by default.
- **Context window: 90/100.** Down from 97. **1M total / 960K input / 64K output** is verified twice — Tencent's API limits and the official repository — which places it firmly in the ≥1M tier. The reduction is for **evidence, not capability: there is still no long-context retrieval benchmark of any kind.** No MRCR, no RULER, no GraphWalks, no AA-LCR. Every other 1M-context model in this batch has at least one measured retrieval result, and several have three. **64K max output** against a 960K input window is also a poor ratio for long-generation agentic work. The prior 97 over-weighted the window specification relative to what is known about behaviour at length.
- **Multimodal: 15/100.** Unchanged. The reviewed official sources describe **text input/output only**; no image, audio, or video capability is claimed or verified. Note that BenchLM files **OfficeQA Pro 66.2%** under "Multimodal & Grounded," but that is a document-QA benchmark over text, not evidence of image input — it does not raise this score. Tencent's **UI-Mate** and **AuK** models are the separate multimodal lines.
- **Coding: 80/100.** Down from 87. **SWE-bench Pro 65.7%**, **SWE-bench Multilingual 82.9%**, **DeepSWE 64.3%**, **SWE Atlas Codebase QnA 64.0%**, and **NL2Repo 58.9%** support strong coding, and **CWE-bench v1 at 53.0%** is one of only two genuinely independent measurements available for this model and is respectable. The reductions come from the long-horizon tail and from the same provenance problem: **ProgramBench 17.5%**, **SWE-Marathon 31.9%**, **PostTrain Bench 35.6%** — all Tencent-sourced and all weak — alongside **the complete absence of SWE-bench Verified, LiveCodeBench, SciCode, and Vibe Code Bench rows.**
- **Cost efficiency: 88/100.** Down from 90. **Apache-2.0** is among the most permissive licences available and is a genuine, durable advantage — no commercial-use restrictions, unlike GLM-5.x or Mistral's Modified MIT. No fixed first-party token price is published, so the economics are entirely self-hosting-dependent, and **770B total / 49B active is substantial infrastructure.** The small reduction reflects that the prior 90 credited "open weights" without a price anchor, and none exists.
- **Overall Score: 67.0/100.** (68 + 82 + 90 + 15 + 80) / 5 = 335 / 5 = 67.0, down from 75.0. **Best fit: self-hosted text workloads where Apache-2.0 licensing is the deciding factor and you can afford to pilot on your own data.** The specific strengths — GPQA 92.3%, HLE-with-tools 55.4%, a 1M window, SWE-Multilingual 82.9% — are real as published. **Four cautions, in order of severity.** First, **treat every Tencent number as unverified**: 29 of 31 rows come from one appendix and the single independent cross-check is 30 points lower. Second, **pilot Terminal-Bench 2.1 on your own harness before committing** — do not plan against 85.4%. Third, **the factual-reliability picture is entirely unknown** — no hallucination rate, no Omniscience index, no AA index, no knowledge cutoff. Fourth, **it is text-only.** And the framing note: **Hy3 (52.75) and Hy3 Preview (52.50) are both tracked separately in this dataset and score 9–15 points lower** — Hy4 is a real generational step up, but if you are choosing between Tencent's open models, note that the preview designation means **this is not a GA release and no successor or timeline is published.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Hy4 preview profile, Tencent's official Hy4-preview repository and benchmark appendix, the Hy4 preview Hugging Face model card, Vals AI's Tencent Hy4 preview leaderboard, and the CWE-bench v1 leaderboard; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the central finding is a structural evidence-provenance problem, not a new benchmark.** **Twenty-nine of thirty-one BenchLM rows trace to a single Tencent appendix image**, and the one independent agentic measurement — **Vals AI's Terminal-Bench 2.1 at 55.1% against Tencent's 85.4%** — is a **30.3-point divergence, the largest recorded in this research effort.** The prior pass credited 89 on Tool use while noting only that "Tau3/Claw values" were missing; it did not register that every other figure shared the same authorship. **Coding's independent anchor is CWE-bench v1 at 53.0% from Collinear**, the second of only two independent measurements for this model. **Three gaps remain unclosable after two passes and are stated rather than estimated:** no hallucination rate or Omniscience index, no LCR/MLCR or AA Intelligence Index, and no long-context retrieval benchmark of any kind — meaning the Context score of 90 reflects a verified *specification* with no measured *behaviour*, which is the largest single reason it falls from 97. **New positives are credited:** DRACO 77.2%, JobBench 61.7%, AutomationBench 32.1%, PostTrain Bench 35.6%, Apex 74.2%. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (BenchLM, Tencent's repository, Vals AI) plus the CWE-bench leaderboard rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Hy4_Recheck.md`, using the same headings.