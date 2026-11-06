# DeepSeek V4.1 Flash 1017 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash-1017`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017. **Not a separate model** — it is the DeepSeek V4.1 Flash weights re-versioned with a **flash-reasoning (1017)** serving tag, and the repo's meta.json records the shared-weights lineage (see `model/deepseek-v4.1-flash/`, refreshed earlier in this session). BenchLM scores it **65.35/100, #31 of 1,015** against the sibling's row, both on the same underlying weights.
- **Short description:** The same V4.1 Flash MoE with a **strongly agentic coding profile** — Terminal-Bench 2.1 90.6% (vendor), DeepSWE 77.0%, CyberGym 88.1%, CWE-Bench-AA 68.3% — and a genuinely strong multimodal record (ExtractBench 87.11%, BabyVision 92.5% w/ Python, ZeroBench 51.0% w/ Python). Its one disqualifying figure is reliability: **AA-Omniscience hallucination rate 96.5% with an index of −5.3** — the worst hallucination rate measured in this research series.
- **Provider / access:** Weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`, open weight), DeepSeek's own API, and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** release date not restated; the 1017 tag is DeepSeek's 2026-10-17 revision of the V4.1 Flash line. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face); `deepseek-ai/DeepSeek-V4.1-Flash` (parent card); `deepseek/deepseek-v4.1-flash-1017` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — shared with the sibling tier.
- **Modalities:** **text and image in; text out**, with an unusually deep measured visual suite (see below).
- **Pricing (as of 2026-11-05):** **$0.28 input / $0.42 output per 1M** (repo meta.json, inherited from the Flash card) — the cheapest frontier-adjacent card in this research series. Methodology anchors put $0.28/$0.42 near 97+.
- **Architecture:** **open weight** MoE; parameter count undisclosed in the sources checked.

### Raw benchmarks found

DeepSeek's own model cards are the primary source (so those rows are **vendor-published**), with Artificial Analysis, Vals AI, Epoch AI, Cognition, Kaggle, Collinear, LlamaIndex, MazeBench, OpenHarmony, Ulam, JevBench, Openrouter and the Bug Hunt Bench public data supplying independent rows. 52 benchmarks total.

Agent / tool use — **strong at coding-agent work, weak at breadth**:

- **Terminal-Bench 2.1: 90.6%** (vendor) — clears the 88%+ reference, the strongest terminal figure in this batch
- Terminal-Bench 2.1 (Vals): **74.5%** — a **16.1-point vendor-vs-independent spread**, the largest in this batch
- **Terminal-Bench 4.0: 42.3%**; terminalBench3: 30% — the newer harnesses drop sharply
- **CyberGym: 88.1%** (vendor); CWE-Bench-AA: **68.3%**; CWE-bench v1: 55.0%; AA Cyber Index: 40.8%; CyberGym-E2E-AA: 22.9%; DeepsecBench-AA: 31.2%; ExploitGym: 15.3%
- GDPval-AA: **55.0%** normalized [AA] — the strongest GDPval figure in this batch
- AutomationBench: **60.5%**; AA ITBench: 46.9%; Agents' Last Exam: 35.4%; HLE w/ tools: 63.9%
- **MazeBench: 1%** — near-floor
- **OSWorld, τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval, ALE, JobBench: no verified public score found**

Reasoning / knowledge — **split, and the split is severe**:

- **GPQA / GPQA Diamond: 90.9%** (vendor) — clears the 90%+ reference
- **HLE: 42.6%** (vendor) / **AA-HLE 39.2%** — clears 40% on the vendor run only, 0.8 points under on the independent run
- **AA-Omniscience: index −5.3, accuracy 46.4%, hallucination rate 96.5%** — **the worst hallucination rate measured anywhere in this research series**, and a negative index meaning more incorrect than correct answers
- AA Intelligence Index: **39.5%** — the strongest composite in this batch; AA-LCR: **84.0%**; **CritPt: 14.3%**
- FrontierMath v2 Tiers 1–3: **67.4%**; Tier 4: **26.8%** — the strongest FrontierMath Tier 4 in this batch
- STEMBench: 2.54; JevBench 1.4: 4.77; JevBench 1.5: 6.65; Apex: 65.6%
- **ARC-AGI, MRCR: no verified public score found**

Coding — **the strongest dimension**:

- **Terminal-Bench 2.1: 90.6%** (vendor) / 74.5% (Vals)
- **DeepSWE: 77.0%** — clears the 74%+ reference
- **NL2Repo: 68.2%**; ScarfBench: **69.0%**; OpenHarmony Bench: 60.3%
- **AA-SciCode: 51.9%** — under the 55%+ reference; ProgramBench: 29.1%; Bug Hunt Bench: 39.1 fixes
- **FrontierCode 2.0: 19.3%** — near-floor; Codeforces: 3,471
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro, Vibe Code Bench: no verified public score found**

Multimodal (image-in) — **unusually strong**:

- **ExtractBench: 87.11%** [LlamaIndex]; **ParseBench: 64.38%** [LlamaIndex]
- **BabyVision w/ Python: 92.5%**; **ZeroBench w/ Python: 51.0%**
- **AA-MMMU-Pro: 77.0%**; Chartography (tools): 83.0%; Design Arena (website): **1,296 Elo**
- **CharXiv, MMMU-Pro from the vendor, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 78/100.** Above the methodology's mid band. **Terminal-Bench 2.1 90.6% clears the 88%+ reference** and CyberGym 88.1%, CWE-Bench-AA 68.3% and GDPval-AA 55.0% corroborate, giving this batch's strongest agentic-coding package. Capped because **Vals measures Terminal-Bench 2.1 at only 74.5% — a 16.1-point spread — Terminal-Bench 4.0 is 42.3%, MazeBench is 1%, and OSWorld, τ³-Banking, MCP-Atlas, Toolathlon and Claw-Eval are entirely absent.**
- **Reasoning: 68/100.** Mid-band. **GPQA 90.9% and HLE 42.6% both clear their references on the vendor run, the AA Intelligence Index is 39.5%, AA-LCR 84.0% and FrontierMath Tier 4 26.8%** are all solid. Heavily capped by **AA-HLE 39.2% (0.8 under), CritPt 14.3%, and above all by AA-Omniscience index −5.3 with a 96.5% hallucination rate — the worst measured in this research series** — which suppresses the whole dimension because a model that hallucinates on 96.5% of unanswerable questions cannot be trusted with the reasoning it demonstrably has.
- **Context window: 97/100.** 1M-token tier with **AA-LCR 84.0%**, among the better measured long-context reasoning figures in this research series. Held just under 100 because no MRCR retrieval figure exists and no max-output limit is published.
- **Multimodal: 88/100.** Text + image in with text out, scored in the methodology's upper band on a genuinely deep visual suite: **ExtractBench 87.11%, BabyVision 92.5% w/ Python, ParseBench 64.38%, AA-MMMU-Pro 77.0%, ZeroBench 51.0% w/ Python and Chartography 83.0%**, with a 1,296-Elo Design Arena. Held below 90+ because there is no video or audio input and output is text-only.
- **Coding: 80/100.** Above the methodology's mid band. **Terminal-Bench 2.1 90.6% clears the terminal reference and DeepSWE 77.0% clears the 74% reference**, with NL2Repo 68.2% and ScarfBench 69.0% supporting. Capped by **FrontierCode 2.0 19.3%, AA-SciCode 51.9% (under 55%), ProgramBench 29.1%, and the total absence of SWE-bench Verified, the AA Coding Index and LiveCodeBench** — so the 70%-index and SWE-bench references cannot be checked at all.
- **Cost efficiency: 97/100.** **$0.28/$0.42 per 1M** is below every anchor in the methodology's cost table except the free tiers, and **open weights provide a self-hosting escape**. Held at 97 rather than the ceiling because there is no free tier and no long-context pricing tier was found.
- **Overall Score: 82/100.** (78 + 68 + 97 + 88 + 80) / 5 = 82.2 → **82** → **82**. Recommendation: the **cheapest genuine agentic-coding model in this research series** — Terminal-Bench 2.1 90.6%, DeepSWE 77.0%, CyberGym 88.1% and AA-MMMU-Pro 77.0% at $0.28/$0.42 with a 1M window and open weights. One hard caution that must travel with the number: **its AA-Omniscience hallucination rate is 96.5%, the worst measured anywhere in this research series** — it is an excellent coding agent and an actively dangerous factual assistant, so never route knowledge questions to it. The 16.1-point Terminal-Bench vendor-vs-Vals spread should be resolved on your own harness before trusting 90.6%.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using DeepSeek's own model cards as the primary source (so those rows are vendor-published and labelled as such), cross-checked against BenchLM's 52-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cognition, Kaggle, Collinear, LlamaIndex, MazeBench, OpenHarmony, Ulam, JevBench and Openrouter) and the repo's `meta.json` for the shared-weights identity, pricing and context facts. Conflicting figures are listed side by side — Terminal-Bench 2.1 90.6% (vendor) vs 74.5% (Vals), HLE 42.6% (vendor) vs 39.2% [AA] — rather than averaged, with the independent run preferred on each. The worst hallucination rate measured in this research series (96.5%) is attributed rather than presented bare. This SKU shares weights with `deepseek-v4.1-flash`; the quality dimensions are analysed on the merged evidence base while the report is written to the 1017 tag's own folder. Missing benchmarks (OSWorld, τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval, ALE, JobBench, ARC-AGI, MRCR, SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro, Vibe Code Bench, CharXiv, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — deepseek-ai/DeepSeek-V4.1-Flash-1017 model card (primary source)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [Hugging Face — deepseek-ai/DeepSeek-V4.1-Flash parent card (source of the shared-weight rows)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [BenchLM — DeepSeek V4.1 Flash benchmark scores (52 rows, 65.35/100, #31/1015)](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Artificial Analysis — DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [Vals AI — Terminal-Bench 2.1 leaderboard](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Openrouter — DeepSeek V4.1 Flash 1017 benchmarks and pricing](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017/benchmarks)
  - See also: [`model/deepseek-v4.1-flash/`](deepseek-v4.1-flash.md) — the shared-weight sibling tier, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
