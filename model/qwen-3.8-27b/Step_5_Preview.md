# Qwen 3.8 27B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.8-27B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B. Alibaba's **dense 27B Apache-2.0 open-weight** checkpoint, released **2026-08-14**. BenchLM's canonical slug is `qwen3-8-27b` (**not** `qwen-3-8-27b`, which 404s — a lookup trap worth recording). It scores **54.55/100, #79 of 1,015** with **75 benchmarks — the deepest evidence base measured anywhere in this research series**, ahead of DeepSeek V4 Pro's 61.
- **Short description:** The most striking value proposition in this research series: a **27B dense model, Apache 2.0, 55.6 GB full weights / 17 GB at Q4_K_M — fits a single 24 GB consumer GPU** — that scores **SWE-bench 86.0% (Vals), AA Coding Index 68.1%, LiveCodeBench v6 90.3%, OmniDocBench 91.1%, CharXiv 90.2% and MathVision 94.6% w/ Python**. Its weaknesses are concentrated and specific: **CritPt 5.4% (the lowest measured in this series), AA Intelligence Index 20.1%, and a near-total collapse on security-agentic work (CyberGym-E2E-AA 0.0%, AA Cyber Index 12.7%).**
- **Provider / access:** **Open weights, Apache 2.0** on Hugging Face (`Qwen/Qwen3.8-27B`, plus a separate `Qwen/Qwen3.8-27B-FP8` artifact), Alibaba Cloud Model Studio, Chutes (incl. a TEE variant), and self-hosting. **Repo meta.json records `noFreeId`** — no OpenCode Zen free tier.
- **Release / knowledge:** released **2026-08-14** (independent reporting and the HF card agree). **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face); `Qwen/Qwen3.8-27B-FP8`; `qwen3-8-27b` (BenchLM canonical); `qwen/qwen3.8-27b` (Openrouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M with YaRN** — repo meta.json. BenchLM records 262K.
- **Modalities:** **text, image and video in; text out** (repo meta.json), with a genuinely deep measured visual suite behind it — see below.
- **Pricing (as of 2026-11-05):** **~$0.40 input / $0.04 cached input / $3.00 output per 1M** via hosted providers (llm-stats), though the decisive fact is that **Apache-2.0 self-hosting is free** and the Q4_K_M build runs on a 24 GB consumer GPU.
- **Architecture:** **dense 27B** (not MoE) — 27B total, 27B active. FP8 artifact published separately.

### Raw benchmarks found

Qwen's own model card is the primary source (so those rows are **vendor-run and labelled as such**), with Artificial Analysis, Vals AI, Epoch AI, VulcanBench, LlamaIndex, MazeBench, the OSWorld 2.0 paper, Bug Hunt Bench and Openrouter supplying independent rows. **75 benchmarks total — the deepest evidence base in this research series, and the majority of rows are independently attributed**, which is unusual for a vendor card.

Agent / tool use — **strong on GUI/web, near-floor on security and maze**:

- **OSWorld-Verified: 84.3%** (vendor) — the strongest OSWorld figure in this research series
- **AndroidWorld: 81.9%** (vendor); **CoWorkBench: 70.7%** (vendor); WebArena-Verified: 64.8% (vendor)
- **Terminal-Bench 2.1: 73.0%** (vendor) / **79.8%** [AA] / **58.4%** (Vals) — a **21.4-point spread**, with AA above the vendor and Vals far below both
- Agents' Last Exam: **42.9%** (vendor); JobBench: 33.4%
- **AA Agentic Index: 46.5%**; **AA Tau3 Banking: 48.0%**; AA AutomationBench: 48.2%; AA EnterpriseOps-Gym: 44.2%
- GDPval-AA: **1,427 Elo** [AA] / 45.9% normalized; AA Briefcase: **1,391 Elo**
- **AA Terminal-Bench 4.0: 5.6%**; **MazeBench: 0%**; GDP.pdf: 16.4%
- **AA Cyber Index: 12.7%**; CWE-Bench-AA: 26.7%; DeepsecBench-AA: 11.5%; **CyberGym-E2E-AA: 0.0%** — the security layer is effectively absent
- **τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval, ALE: no verified public score found**

Reasoning / knowledge — **thin on depth, distinctive on reliability**:

- **GPQA: 89.2%** (vendor) / **AA-GPQA Diamond 90.5%** / 88.9% (Vals) — the vendor fails the 90%+ reference, AA clears it
- **HLE: 30.8%** (vendor) / **AA-HLE 33.9%** — fails the 40%+ reference by ~6–9 points on both
- **AA Intelligence Index: 20.1%** — low
- **AA-Omniscience: index −6.4, accuracy 17.3%, hallucination rate 28.6%** — the **fourth-lowest hallucination rate in this research series**, on the **lowest accuracy (17.3%) measured anywhere here**: the model rarely answers, and when it does it is usually right
- **AA-LCR: 82.0%**; **CritPt: 5.4% — the lowest CritPt measured anywhere in this research series**; MLCR-AA: 22.8%
- MMLU-Pro (Vals): 84.3%; IFBench: 79.5%
- **ARC-AGI, MRCR, AIME, FrontierMath Tier 4, AA-Omniscience from the vendor: no verified public score found**

Coding — **the strongest dimension**:

- **SWE-bench (Vals): 86.0%** — clears the 85%+ terminal reference and is the strongest SWE-bench figure in this research series for a 27B
- **LiveCodeBench v6: 90.3%** (vendor) / **84.0%** (Vals)
- **SWE-bench Pro: 61.7%** (vendor); **AA Coding Index: 68.1%** — 1.9 points under the 70% frontier reference
- **VulcanBench v3: 82.6%** [VulcanBench]
- **AA-SciCode: 46.6%** — under the 55%+ reference; **DeepSWE: 42.2%** — 31.8 points under the 74% reference; **NL2Repo: 42.3%**; Bug Hunt Bench: 15.0 fixes
- **SWE-bench Verified from the vendor, Terminal-Bench 4.0, Vibe Code Bench, FrontierCode: no verified public score found**

Multimodal (image-in) — **unusually strong for a 27B**:

- **OmniDocBench 1.5: 91.1%**; **CharXiv: 90.2%** (83.7% w/o tools); **MathVision: 90.0%** / **94.6% w/ Python**
- **BabyVision: 85.6% w/ Python** / 65.7% without; **RealWorldQA: 85.9%**; **ERQA: 65.5%**
- **ExtractBench: 89.75%** [LlamaIndex]; **ParseBench: 69.03%** [LlamaIndex]
- **AA-MMMU-Pro: 76.3%**; Vision2Web: 62.9%
- **ZeroBench, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** Above the methodology's mid band. **OSWorld-Verified 84.3% and AndroidWorld 81.9% are the strongest GUI/computer-use figures in this research series**, CoWorkBench 70.7% and WebArena 64.8% corroborate, and **AA Agentic Index 46.5%, AA Tau3 Banking 48.0% and AA AutomationBench 48.2%** give a solid independent composite. Capped by **Terminal-Bench 2.1 spanning 73.0%/79.8%/58.4% — a 21.4-point spread — AA Terminal-Bench 4.0 5.6%, MazeBench 0%, and a complete collapse on security-agentic work (CyberGym-E2E-AA 0.0%, AA Cyber Index 12.7%, CWE-Bench-AA 26.7%)**, plus τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval and ALE having no figure.
- **Reasoning: 62/100.** Mid-band. The dimension's defining shape is **a 17.3% accuracy on a 28.6% hallucination rate — the lowest accuracy measured in this research series paired with the fourth-lowest hallucination rate** — meaning the model abstains constantly and is usually right when it speaks, which is a real but narrow form of reliability. AA-LCR 82.0% is good long-context reasoning, GPQA Diamond clears 90% on the AA run, MMLU-Pro 84.3% is respectable. Capped by **CritPt 5.4% (the series-lowest), AA-HLE 33.9% (under 40%), AA Intelligence Index 20.1%, the Omniscience index of −6.4, MLCR-AA 22.8%, and no ARC-AGI, MRCR, AIME or FrontierMath Tier 4 figure.**
- **Context window: 88/100.** **262K native, extensible to 1M via YaRN** — the methodology's 200K–500K band at its top edge, scored at 88 because **AA-LCR is 82.0%**, so the native window is measurably usable. Held below the ≥1M tier because the 1M is an extension trick rather than native, no MRCR or GraphWalks run exists at either depth, and no max-output limit is published.
- **Multimodal: 90/100.** Text, image and video in with text out, scored at the top of the methodology's 75–90 band on a genuinely deep visual suite for a 27B: **OmniDocBench 91.1%, CharXiv 90.2%, MathVision 94.6% w/ Python, BabyVision 85.6% w/ Python, RealWorldQA 85.9%, ExtractBench 89.75%, AA-MMMU-Pro 76.3%**. Held at 90 rather than above because output is text-only, there is no audio input, ZeroBench is unmeasured, and Vision2Web 62.9% and ERQA 65.5% show the lower bounds.
- **Coding: 82/100.** Above the methodology's mid band and the strongest dimension. **SWE-bench 86.0% (Vals) clears the 85%+ reference — the strongest figure in this research series at this parameter count — with LiveCodeBench v6 90.3%/84.0%, AA Coding Index 68.1% (1.9 under the 70% reference) and VulcanBench v3 82.6%** all strong. Capped by **DeepSWE 42.2% (31.8 points under the 74% reference), AA-SciCode 46.6% (under 55%), NL2Repo 42.3%, Bug Hunt Bench 15.0, and the absence of vendor SWE-bench Verified, Vibe Code Bench and FrontierCode**.
- **Cost efficiency: 96/100.** **Apache 2.0, so self-hosting is free, and the Q4_K_M build is 17 GB — it runs on a single 24 GB consumer GPU.** That combination puts it at the top of the methodology's cost scale: there is no inference bill to pay at all if you own the hardware. Hosted fallback is ~$0.40/$0.04/$3.00 per 1M, which is also cheap. Held at 96 rather than 100 because the hosted route is not free, no Zen free tier exists (`noFreeId`), and the 262K native window means genuinely long work needs YaRN extension or a bigger host.
- **Overall Score: 78.8/100.** (72 + 62 + 88 + 90 + 82) / 5 = 78.8 → **79**. Recommendation: **the best self-host value in this research series, by a wide margin.** A 27B Apache-2.0 dense model that fits one 24 GB card while scoring SWE-bench 86.0%, OSWorld-Verified 84.3%, AA Coding Index 68.1%, OmniDocBench 91.1% and AA-LCR 82.0% is a genuinely unusual package — independent reporting confirms it beats Claude Opus 4.6 Max on several benchmarks and it is 11 points behind Claude Opus 5 on SWE-bench at roughly 1/40th the runtime footprint. Three cautions: **CritPt 5.4% is the lowest measured in this series and AA-Omniscience accuracy is 17.3%**, so it is not a deep-reasoning or knowledge model; **its security-agentic layer is absent** (CyberGym-E2E-AA 0.0%), so never route security work to it; and **DeepSWE 42.2%** shows a real weakness on repository-scale generation despite the strong SWE-bench repair scores. Generational gains over Qwen3.6-27B are documented at +9.6 Terminal-Bench 2.1, +8.2 SWE-bench Pro, +28.9 DeepSWE, +29.7 QwenSWEBench, +10.4 IFBench and +6.4 LiveCodeBench v6.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against **BenchLM's 75-row catalog — the deepest evidence base measured anywhere in this research series, and unusually well-balanced with a majority of independently attributed rows** — which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, VulcanBench, LlamaIndex, MazeBench, the OSWorld 2.0 paper, Bug Hunt Bench and Openrouter, plus three independent write-ups (llm-stats for pricing/context/licence, a QuantStub-style independent benchmark roundup, and a hardware/serving review) for identity and deployment facts. **A lookup trap is recorded: BenchLM's canonical slug is `qwen3-8-27b` (with dots); the repo folder's spelling `qwen-3-8-27b` 404s on both BenchLM and LLMLearner, and the report was only possible once the dotted slug was found via search.** Two figure conflicts are recorded rather than resolved: **BenchLM's AA Intelligence Index of 20.1% against an independent report of 52 at maximum reasoning effort — a 32-point gap that almost certainly reflects differing reasoning-effort settings, and which is the single most important thing to verify on your own harness before trusting this model's reasoning depth**; and Terminal-Bench 2.1 at 73.0% (vendor) / 79.8% [AA] / 58.4% (Vals), a 21.4-point spread. The series-lowest CritPt (5.4%) and series-lowest Omniscience accuracy (17.3%) are attributed rather than presented bare. **Licence verified as Apache 2.0 by two independent sources**, which is the property that drives the cost score. Missing benchmarks (τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval, ALE, ARC-AGI, MRCR, AIME, FrontierMath Tier 4, vendor SWE-bench Verified, Vibe Code Bench, FrontierCode, ZeroBench, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.8-27B model card (primary benchmark source)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Hugging Face — Qwen/Qwen3.8-27B-FP8 artifact](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)
  - [BenchLM — Qwen3.8-27B benchmark scores (75 rows, 54.55/100, #79/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-8-27b)
  - [Artificial Analysis — Qwen3.8-27B](https://artificialanalysis.ai/models/qwen3-8-27b)
  - [Vals AI — Qwen3.8-27B leaderboard results](https://www.vals.ai/models/alibaba_qwen3.8-27b)
  - [LLM Stats — Qwen3.8-27B pricing, context, licence, release](https://llm-stats.com/models/qwen3.8-27b)
  - [Independent benchmark roundup — official vs independent results, hardware footprint](https://www.qubrid.com/blog/qwen38-27b-benchmarks-official-and-independent-results)
  - [Independent hardware/serving review — Apache 2.0, 55.6 GB / 17 GB Q4_K_M, 24 GB GPU](https://kingy.ai/blog/qwen3-8-27b-specs-benchmarks-local-hardware/)
  - [Independent coding-leaderboard write-up — SWE-bench Verified 86.0%, #14 of 30, 11 points behind Claude Opus 5](https://genztech.blog/models/qwen3-8-27b/)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
