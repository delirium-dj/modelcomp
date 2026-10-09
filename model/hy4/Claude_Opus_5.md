# Hy4 — findings by Claude Opus 5

- Source: Tencent Hy Team / Hunyuan (`tencent/Hy4-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (released as **Hy4 preview**)
- **Short description:** Tencent's new-generation **Apache-2.0 open-weight flagship** — a 770B-parameter Mixture-of-Experts with 49B activated per token and a 1M context, which Tencent describes as delivering "the largest generation-over-generation gain we've measured, and enough to put Hy4 preview at the open-source frontier" ([Hy4-preview model card](https://huggingface.co/tencent/Hy4-preview)). Trained deliberately around **what Tencent's own experts ship**: software engineering, office/analysis artifacts, game development and scientific research, co-designed with the CodeBuddy and WorkBuddy products. This folder tracks the Hy4-preview checkpoint — the only Hy4 release — while `hy3` and `hy3-preview` are separate earlier folders.
- **Provider / access:** **Open weights on Hugging Face, ModelScope, GitCode and CNB**, in both BF16 and a released **Hy4 preview-FP8** quantized variant. Tencent publishes **official prebuilt serving images** — `vllm/vllm-openai:hy4-preview` and `lmsysorg/sglang:hy4-preview` (multi-arch, **x86 and Arm**) — with recipes, a complete finetuning pipeline, and the **AngelSlim** compression toolkit. Dedicated `hy_v4` tool-call and reasoning parsers ship in both runtimes. **No OpenCode Zen ID**; this repo records `tencent/hy4`.
- **Release / knowledge:** **No explicit release date on the model card.** The Hy4-preview Hugging Face collection shows a last update of **23 days before access** (i.e. around mid-September 2026); this repo's curated metadata says "August 2026". Downloads: 25,859 in the trailing month. Knowledge cutoff: no verified public date found. I am not asserting a precise date for either.
- **IDs:** `tencent/Hy4-preview` and `tencent/Hy4-preview-FP8` (Hugging Face), served as `hy4-preview`. **No free hosted tier** — the Apache-2.0 weights are the free path.
- **Context length:** **1,000,000 tokens** (model specification table). Max output: no figure on the model card; this repo's metadata records a 960K in / 64K out split, reported as curated.
- **Modalities:** **Text in → text out. This model is text-only.** Hugging Face classifies it `text-generation`, there is no vision or audio encoder in the specification table, and the repo metadata agrees ("Text in/out"). Reasoning: **yes, defaulting to `"high"` (deep chain-of-thought)**, with `reasoning_effort: "no_think"` available for direct responses. Recommended sampling: temperature 0.9, top-p 1.0. Tool calls: yes, with a purpose-built `hy_v4` parser and `--enable-auto-tool-choice` in Tencent's own vLLM recipe.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0.** No first-party hosted endpoint or published per-token rate; Novita appears as an inference provider. Practical cost is compute: Tencent's own recipes assume **tensor-parallel size 8** on the FP8 build, so this is datacentre-scale self-hosting, not consumer hardware.
- **Architecture:** One of the most completely disclosed in this dataset. **770B total / 49B activated**, 78 layers — the **first layer a standard dense FFN, the remaining 77 MoE**, each with **256 routed experts plus 1 shared expert**, top-8 routed plus the shared expert activated per token. A **native MTP layer (10B total, 0.7B activated)** is built in for speculative decoding (HF reports 780B total including it). Attention is **Gated DeepSeek Sparse Attention (Gated DSA) with IndexCache for cross-layer sparse index reuse** — the same IndexCache technique GLM-5.2 uses, and Tencent cites both the [IndexCache paper (arXiv 2603.12201)](https://arxiv.org/abs/2603.12201) and [DeepSeek-V3.2 (arXiv 2512.02556)](https://arxiv.org/abs/2512.02556), crediting DeepSeek and GLM as inspirations. The residual pathway uses **iHC (identity Hyper-Connections)** across **4 residual streams**. Full specs: hidden size 6144, 64 attention heads, query compression dim 2048, KV compression dim 512, indexer 32 heads × 128 dim with **top-k 2048**, MoE intermediate 2048, FFN intermediate 18432, vocabulary 120,832. **Apache 2.0.**

### Raw benchmarks found

> **Two provenance notes that matter.** First, Tencent publishes its benchmark appendix as a **JPG image** rather than a table, so the vendor figures reach me via BenchLM's transcription — less auditable than GLM-5.2's or Kimi's published tables. Second, and partially offsetting that: **seven of those figures are independently corroborated by Hugging Face leaderboard exports** from the benchmark owners themselves (GPQA Diamond 92.3, Terminal-Bench 2.1 85.4 via `harborframework`, SWE-bench Multilingual 82.9, Toolathlon-Verified 74.1 via `hkust-nlp`, SWE-bench Pro 65.7 via ScaleAI, DeepSWE 64.3 via `datacurve`, APEX-Agents 37.1 via `mercor`). That is strong verification.

Agent / tool use:

- **GDPval-AA: 1678 Elo** (Tencent appendix) — the **second-highest GDPval figure in this entire research pass**, behind only Claude Fable 5's 1747
- **WideResearch: 83.9%**; **MCP Atlas: 83.7%** (Tencent appendix)
- **BankerToolBench: 78.6%**; **CyberGym: 78.4%**; **DRACO: 77.2%** (Tencent appendix)
- **Toolathlon-Verified: 74.1%** (Tencent appendix; **corroborated at 74.1 by the hkust-nlp leaderboard export**)
- **Terminal-Bench 2.1: 85.4%** (Tencent appendix; **corroborated at 85.4 by the official `harborframework/terminal-bench-2.1` leaderboard export**) — versus **55.1%** ([Vals AI](https://www.vals.ai/models/tencent_hy4-preview)). This **30.3-point spread** is the largest I have recorded in this pass, and because the high figure carries an *official leaderboard* export rather than only a vendor claim, the honest reading is **harness divergence**, not vendor inflation. Both are credited as real measurements of different harnesses.
- skillsBench: **62.9%**; JobBench: **61.7%** (Tencent appendix)
- HLE with tools: **55.4%**; CWE-bench v1: **53.0%** ([Collinear leaderboard](https://cwe-bench.com/) — independent)
- APEX-Agents: **37.1%** (corroborated by the mercor leaderboard export); AutomationBench: **32.1%**; **Agents' Last Exam: 22.8%**
- **Blind human expert evaluation** (Tencent, documented): 163 internal experts rated outputs on **203 engineering tasks**; Hy4 preview beat **GLM 5.3** (2.99 vs 2.92 average; 46.8% wins / 12.8% ties / 40.4% losses) and **Kimi K3** (2.99 vs 2.94; 51.2% wins / 7.9% ties / 40.9% losses). Narrow margins, honestly reported with loss rates included.

Reasoning / knowledge:

- **GPQA Diamond: 92.3%** (Tencent appendix; **corroborated at 92.3 by the Idavidrein/gpqa leaderboard export**) — among the highest GPQA figures anywhere in this dataset
- **HLE: 43.4% without tools, 55.4% with tools** (Tencent appendix)
- Apex (mathematics): **74.2%**; CritPt: **16.9%** (Tencent appendix)
- BenchLM overall: **60.91/100, rank #48 of 889** (31 of 625 benchmarks — well covered)
- **Artificial Analysis has no entry for this model**, so there is no AA Intelligence Index, no AA-LCR, no AA-IFBench and — importantly — **no hallucination-rate measurement**.

Coding:

- **Terminal-Bench 2.1: 85.4%** / **55.1%** (see above)
- **SWE-bench Multilingual: 82.9%** (corroborated by the SWE-bench leaderboard export)
- **SWE-bench Pro: 65.7%** (corroborated by the ScaleAI leaderboard export)
- **DeepSWE: 64.3%** (corroborated by the datacurve leaderboard export) — for scale, GLM-5.2 scores 46.2 and Gemini 3.1 Pro 10 on this benchmark
- NL2Repo: **58.9%**; PostTrain Bench: **35.6%**; sweMarathon: **31.9%** (Tencent appendix)
- **ProgramBench: 17.5%** (Tencent appendix) — a striking outlier: GLM-5.2 scores 63.7% and Kimi K2.7 Code 53.6% on the same benchmark. Reported as-is; I have no explanation for a 46-point deficit against a model it beats elsewhere.
- SWE-bench Verified, LiveCodeBench: no verified public score found

Multimodal:

- **Nothing, consistent with a text-only model.** OfficeQA Pro **66.2%** appears in the appendix but, given no vision encoder exists, must be a document-*text* QA measurement rather than visual document understanding, and is not credited as multimodal evidence.

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** The 1M window rests entirely on architecture: Gated DSA with IndexCache cross-layer sparse index reuse, an indexer with top-k 2048, and iHC across 4 residual streams. That is a specific, papered mechanism — but it is not a measurement.

### Normalized scores (1–100)

- **Tool use: 83/100.** The broadest and best-corroborated agentic evidence base in this batch: **GDPval-AA 1678 Elo** is second only to Claude Fable 5 across my entire pass, **MCP Atlas 83.7% and WideResearch 83.9%** are frontier-class, Toolathlon-Verified 74.1% is confirmed by the benchmark owner's own leaderboard, and CyberGym 78.4% / BankerToolBench 78.6% / DRACO 77.2% show genuine domain breadth. Capped below the mid-80s by the unresolved **30.3-point Terminal-Bench harness divergence** (85.4% official leaderboard vs 55.1% Vals), and by the hard tail: **Agents' Last Exam 22.8%, AutomationBench 32.1%, APEX-Agents 37.1%**.
- **Reasoning: 82/100.** **GPQA Diamond 92.3% with an independent leaderboard export confirming it** is among the strongest science-reasoning results in this dataset, and **HLE 43.4% without tools** is excellent for an open-weight model — better than GLM-5.2's 40.5% and Kimi K2.7 Code's 35.0%. Apex 74.2% on mathematics is solid. Capped by CritPt 16.9% and, significantly, by the **complete absence of any Artificial Analysis coverage**: no aggregate index and, more consequentially, **no hallucination measurement at all** on a model whose own vendor admits it "over-verif[ies] its own work".
- **Context window: 86/100.** 1,000,000 tokens with the mechanism published and papered rather than asserted — Gated DSA plus **IndexCache cross-layer sparse index reuse** (the same technique GLM-5.2 uses, with a dedicated arXiv paper), an indexer at top-k 2048, and iHC expanding inter-layer flow across 4 residual streams. Held below the 90s because **not one long-context measurement exists** — no MRCR, no retrieval curve, not even an AA-LCR entry — so the window is architecturally credible and empirically unverified.
- **Multimodal: 15/100.** **Text-only** — no image, audio or video input, no generated media, and no vision encoder anywhere in a fully-published specification table. This is the template's floor, and it is the single reason a model with GPQA 92.3% and GDPval 1678 lands in the 60s overall rather than the high 70s.
- **Coding: 80/100.** Strong and unusually well-verified: **SWE-bench Multilingual 82.9%, SWE-bench Pro 65.7% and DeepSWE 64.3% are all confirmed by the benchmark owners' own leaderboard exports**, and DeepSWE 64.3% beats GLM-5.2's 46.2% outright. The **blind 163-expert / 203-task evaluation** beating GLM 5.3 and Kimi K3 is real-world evidence that most vendors do not attempt, and Tencent reported its loss rates (40%) rather than only its wins. Capped by sweMarathon 31.9%, PostTrain Bench 35.6%, the absence of SWE-bench Verified or LiveCodeBench, and the unexplained **ProgramBench 17.5%** outlier.
- **Cost efficiency: 84/100.** **Apache 2.0** on a 770B model with only **49B activated per token** is a serious offering, and Tencent backs it with real deployment engineering: an **FP8 checkpoint released alongside BF16**, a native **MTP layer** for speculative decoding (3 speculative tokens in the official recipe), official prebuilt vLLM and SGLang images including **Arm** builds, a `FLASHMLA_SPARSE` attention backend, a complete finetuning pipeline, and the AngelSlim compression toolkit. Docked meaningfully because the practical floor is high: Tencent's own recipes assume **tensor-parallel 8**, 770B of weights must be resident, there is **no hosted first-party endpoint and no free tier**, and only one inference provider appears.
- **Overall Score: 69.2/100.** Mean of the five non-cost dims (83 + 82 + 86 + 15 + 80) / 5 = 69.2. Best fit: **self-hosted frontier-class agentic engineering at datacentre scale** — long-horizon software work, security analysis (CyberGym 78.4%, CWE-bench 53.0%), finance tooling (BankerToolBench 78.6%) and research reasoning (GPQA 92.3%) — where Apache-2.0 weights and data sovereignty justify the 8-GPU footprint. The Overall is suppressed roughly 13 points by the text-only floor; on text-and-tools workloads this is among the strongest open models in the dataset. Two things to design around, both disclosed by Tencent itself: it "spend[s] longer than necessary reasoning through complex tasks" and over-verifies, and its agentic strength is harness-sensitive enough that a 30-point Terminal-Bench spread exists between two credible measurements.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the `tencent/Hy4-preview` Hugging Face model card (Apache-2.0 licence, the complete architecture specification table covering 770B/49B-active MoE, 78 layers with 1 dense plus 77 MoE at 256 routed + 1 shared expert and top-8 routing, the native 10B/0.7B MTP layer, Gated DSA with IndexCache and its arXiv citations, iHC with 4 residual streams, all attention/indexer/FFN dimensions, 1M context and 120,832 vocabulary, text-generation-only classification, the `"high"` default reasoning mode and `no_think` option, recommended sampling, the FP8 variant, the official vLLM and SGLang images and recipes including tensor-parallel 8 and MTP speculative decoding, the finetuning pipeline and AngelSlim toolkit, the CodeBuddy/WorkBuddy co-design, the 163-expert / 203-task blind evaluation with full win/tie/loss breakdowns against GLM 5.3 and Kimi K3, and the self-disclosed Known Limitations), its Hugging Face **evaluation-results panel** — which provides independent leaderboard-export corroboration for seven benchmarks and is reported as such — BenchLM's aggregated page, and the Vals AI and Collinear CWE-bench leaderboards. Tencent's benchmark appendix is published as a **JPG image** rather than a table; that reduced auditability is flagged explicitly, and the partial leaderboard corroboration is what justifies weighting those figures. The 30.3-point Terminal-Bench 2.1 spread is reported as harness divergence rather than vendor inflation, since the high figure carries an official leaderboard export. The ProgramBench 17.5% outlier is reported without explanation rather than smoothed. Artificial Analysis has no entry, so the absence of an intelligence index and hallucination rate is reported, not proxied. No data was imported from `hy3` or `hy3-preview`. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
