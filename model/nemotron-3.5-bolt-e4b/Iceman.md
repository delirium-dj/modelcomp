# Nemotron 3.5 Bolt E4B — findings by Iceman

- Source: NVIDIA / Nemotron 3.5 Bolt E4B (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, announced in Nemotron 3.5 Super VL blog)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B 4GB
- **Short description:** Nemotron 3.5 Bolt E4B is NVIDIA’s 4GB-class edge text-generation model (Nemotron 3.5 Bolt family) intended for fast conversational/agentic use on RTX and Jetson; publicly released on Hugging Face as an NVFP4 4GB deployment target.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, OpenMDW 1.1 license per HF card) and NVIDIA ecosystem distribution (build.nvidia.com/search listing observed). Local metadata lists `opencode/nemotron-3.5-bolt-e4b`, `noFreeId`.
- **Release / knowledge:** NVIDIA blog announced Nemotron 3.5 Bolt as coming to RTX and Jetson starting October 23, 2026; Hugging Face model page reviewed 2026-11-14 shows released model artifacts/benchmarks. Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `nemotron-3.5-bolt-e4b`, `Nemotron 3.5 Bolt E4B`, `Nemotron 3.5 Bolt E4B 4GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `opencode/nemotron-3.5-bolt-e4b`.
- **Context window:** 256,000 tokens (Hugging Face model card/specs).
- **Modalities:** Text input / text output (HF task: text generation). Voice/conversational agent use is implied by product positioning but not verified as native audio modality in reviewed model specs.
- **Pricing (as of 2026-11-14):** Open weights / self-host under OpenMDW 1.1 (infrastructure cost applies). No independently verified hosted token pricing found in this pass.
- **Architecture:** Nemotron 3.5 Bolt hybrid architecture (HF card): 6,987,504,128 parameters (FP32 parameter-equivalent as reported), 52 layers, BF16/NVFP4 model artifacts referenced; optimized for 4GB edge deployment.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed NVIDIA’s Nemotron 3.5 Super VL/Bolt blog, Hugging Face model card for `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (including benchmark table), Hugging Face/model search results, Artificial Analysis model page/search for `Nemotron 3.5 Bolt E4B 4GB`, OpenRouter/build.nvidia/model.dev searches, and local metadata/prior report. Public release artifacts and a benchmark table are now available for the exact 4GB E4B model; however, coverage is narrower than standard repo dimensions (strong instruction/math/tool-use proxies in HF table, limited/no verified standard coding-agent/long-context-multimodal benchmarks). Scores are normalized estimates with caveats.

Hugging Face model card benchmark table (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, BF16 vs 4GB NVFP4 shown; 4GB values used as deployment-relevant):

- **MultiChallenge:** 53.10 (BF16) / 53.30 (4GB)
- **MMLU-Pro:** 69.66 (BF16) / 69.54 (4GB)
- **GPQA-Diamond:** 69.34 (BF16) / 69.07 (4GB)
- **AA-LCR:** 33.62 (BF16) / 33.75 (4GB)
- **HLE:** 9.92 (BF16) / 9.45 (4GB)
- **IFBench:** 71.54 (BF16) / 71.26 (4GB)
- **MATH-500:** 93.90 (BF16) / 93.60 (4GB)
- **AIME 2025:** 66.56 (BF16) / 66.61 (4GB)
- **Scicode:** 35.47 (BF16) / 35.00 (4GB)
- **BFCL v4:** 54.36 (BF16) / 54.32 (4GB)
- **Terminal Bench 2 (reported on HF table):** 31.72 (BF16) / 31.50 (4GB)
- **Arena Hard v2:** 31.54 (BF16) / 32.23 (4GB)

Artificial Analysis page/search (`nemotron-3-5-bolt-e4b-4gb`, reviewed 2026-11-14):

- **Artificial Analysis Intelligence Index:** N/A / unknown (page shows no populated index/benchmark summary in accessible extracted content; some fields null).
- **Release date shown:** 2026-10-23.

Other verified specs/capabilities:

- **Context window:** 256K (HF card).
- **Modalities:** text in/out (HF).
- **License/distribution:** OpenMDW 1.1 on HF; open-weights edge deployment positioning (4GB target) per NVIDIA blog/HF.

No verified public standardized scores found in this pass for: SWE-bench Verified/Pro, LiveCodeBench, τ²/τ³-bench suites, MMMU/MMMU-Pro, MathVista, video benchmarks, or long-context retrieval benchmarks beyond AA-LCR.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores) for a small 4GB-class edge model; benchmark coverage is partial and mixed across BF16 vs 4GB variants.

- **Tool use: 52/100.** HF reports solid function-calling/instruction-following proxies for its class (BFCL v4 ~54.3, IFBench ~71.3, Terminal Bench 2 ~31.5), but no verified τ²/τ³/MCP/agent-suite coverage found.
- **Reasoning: 49/100.** Reasonable small-model reasoning/math signals (MMLU-Pro ~69.5, GPQA-Diamond ~69.1, MATH-500 ~93.6, AIME 2025 ~66.6) offset by low HLE (~9.5) and low AA-LCR (~33.8).
- **Context window: 72/100.** 256K context is strong for an edge/4GB-class model, but independently verified long-context benchmark evidence is limited (AA-LCR 33.75 only in reviewed set).
- **Multimodal: 10/100.** Reviewed sources indicate text-only model artifacts/specs (text generation). No verified image/video/audio multimodal capability or benchmarks.
- **Coding: 38/100.** Some coding/technical signal exists (Scicode ~35.0, Terminal Bench 2 ~31.5), but no verified SWE-bench/LiveCodeBench and limited agentic coding evidence.
- **Cost efficiency: 90/100.** Open weights under OpenMDW 1.1 and 4GB edge deployment target imply very strong local/self-host cost efficiency for the capability class (hardware/power still apply).
- **Overall Score: 44/100.** Mean of the five non-cost dimensions (Tool 52, Reasoning 49, Context 72, Multimodal 10, Coding 38) = 44.2, rounded to 44; capable for a 4GB edge text model on instruction/math/tool proxies, but not broadly comparable to larger multimodal frontier/general-purpose models.

> Caution: Prior local metadata described this as unreleased/unscored; public HF release/benchmarks now exist. Scores are provisional and based on partial benchmark coverage (HF table primary; AA page lacked populated index values in this pass).

### Source comparison / conflicts

- **Release/status:** NVIDIA blog announced Bolt for RTX/Jetson starting Oct 23, 2026; HF now hosts `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` with specs/benchmarks. This supersedes prior “unreleased/no weights” exclusion state in local metadata/report.
- **Identity/specs:** HF page, AA listing, and NVIDIA/search ecosystem references align on Nemotron 3.5 Bolt E4B 4GB / 256K text model / 4GB edge target. Exact parameterization is reported in HF metadata/table context (hybrid model) rather than a simple dense size label.
- **Benchmarks:** HF provides a concrete BF16 vs 4GB benchmark table (e.g. GPQA-D 69.07, MMLU-Pro 69.54, AIME25 66.61, IFBench 71.26, BFCL v4 54.32, AA-LCR 33.75 for 4GB). AA page for the same model showed Intelligence Index N/A/null fields in accessible extraction; treated as incomplete catalog coverage, not a contradiction of HF table values.
- **Modalities/pricing:** HF indicates text generation; no verified multimodal/native audio spec found. No verified hosted token pricing found; open-weights self-host is available.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across NVIDIA blog, Hugging Face model pages/searches, Artificial Analysis model/search pages, OpenRouter/build.nvidia/models.dev searches, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): NVIDIA Nemotron 3.5 Super VL/Bolt blog fetch, HF Nemotron-3.5-Super-VL NVFP4 card fetch, HF/NVIDIA/OR/AA/models.dev/build.nvidia search pages for bolt/super-vl, HF Bolt model search hits scan, HF `NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` card fetch, AA bolt model page fetch/scan, OpenRouter/build.nvidia bolt URL attempts/scans, HF Super VL benchmark table extraction, HF Bolt benchmark table extraction, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Nemotron 3.5 Super VL and Bolt announcement (NVIDIA blog)](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
  - [NVIDIA-Nemotron-3.5-Bolt-E4B-4GB (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [Nemotron 3.5 Bolt E4B 4GB (Artificial Analysis)](https://artificialanalysis.ai/models/nemotron-3-5-bolt-e4b-4gb)
  - Local repository metadata consulted: `model/nemotron-3.5-bolt-e4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
