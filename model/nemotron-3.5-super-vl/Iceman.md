# Nemotron 3.5 Super VL 120B A12B — findings by Iceman

- Source: NVIDIA / Nemotron 3.5 Super VL 120B A12B (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Super VL 120B A12B (NVFP4)
- **Short description:** Nemotron 3.5 Super VL is NVIDIA’s open-weight vision-language hybrid Mamba-Transformer MoE model (120B total / 12B active class) designed for multimodal and video-centric agent workflows, with a 1M native context window.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, OpenMDW 1.1) and hosted providers (e.g. NanoGPT pricing referenced in local metadata). Local metadata lists `opencode/nemotron-3.5-super-vl`, `noFreeId`.
- **Release / knowledge:** NVIDIA blog and Hugging Face model card reviewed 2026-11-14 (announcement/release context October 2026). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `nemotron-3.5-super-vl`, `Nemotron 3.5 Super VL 120B A12B`, `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, `opencode/nemotron-3.5-super-vl`.
- **Context window:** 1,000,000 native (HF card/blog); host-served context may vary (local metadata notes 262,144 in some hosted contexts).
- **Modalities:** Text, image, and video input; text output (vision-language).
- **Pricing (as of 2026-11-14):** Open weights self-host free under OpenMDW 1.1 (infrastructure cost applies). Local metadata cites NanoGPT hosted pricing ~$0.15/$0.50 per 1M (cache $0.02); provider rates may vary.
- **Architecture:** Hybrid Mamba-Transformer MoE VLM, 120B total / ~12B active parameters (NVFP4 deployment artifact on HF; BF16/NVFP4 benchmark table provided).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed the NVIDIA Nemotron 3.5 Super VL/Bolt blog, Hugging Face NVFP4 model card and embedded benchmark table, Hugging Face/open catalog searches (OpenRouter/AA/models.dev/build.nvidia) and local metadata/prior report. The HF card provides extensive attributable benchmark numerics for BF16 and NVFP4 variants across reasoning, coding, agentic/tool, long-context, and multimodal tasks. Scores are normalized estimates from available evidence with caveats (vendor/HF-reported table, some benchmark names/versions differ from common repo baselines).

Hugging Face model card benchmark table (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, BF16 / NVFP4; NVFP4 emphasized as deployment-relevant):

- **Reasoning/knowledge:** GPQA-Diamond 89.52 / 89.90, HLE text-only 31.79 / 31.44, MMLU-ProX 76.91 / 73.76, AA-Omniscience accuracy 26.20 / 25.86, AA-Omniscience hallucination rate 30.0 / 27.7, AA-Omniscience index 4.03 / 5.3, APEX shortlist 88.36 / 89.36
- **Coding:** LiveCodeBench v6 88.22 / 87.41, SciCode subtask 47.13 / 46.61, SWE-bench Verified 71.10 / 71.07, SWE-bench Multilingual 67.72 / 67.00, SWE-bench Pro 51.78 / 51.30
- **Agentic/tool/long-context/instruction:** Terminal-Bench 2.1 60.67 / 62.78, AA-LCR v1.1 68.62 / 67.69, GraphWalks 89.71 / 90.34, IFBench 70.86 / 71.50, tau2-bench retail 69.24 / 69.30, tau2-bench airline 76.50 / 75.75, tau2-bench telecom 73.19 / 73.19, tau3-bench banking 18.88 / 17.78, BrowseComp 78 / 77.5, GDPval-AA v2 1211 / 1206
- **Multimodal/vision/video/document:** BabyVision 29.60 / 29.51, MMLongBench-Doc 62.82 / 62.82, V* 85.60 / 85.95, OCR-Reasoning 65.08 / 65.09, MathVision 78.16 / 77.79, HLE full set 29.20 / 29.00, OCRBench v2 EN 68.12 / 68.34, OCRBench v2 ZH 59.15 / 59.03, CharXiv reasoning 80.82 / 79.88, Video-MME v2 32.85 / 32.54, OSWorld-Verified 51.14 / 52.3
- **Other HF card metrics:** LMArena v3 proxy 52.67 / 51.93, WMT24++ 84.80 / 84.76

Other verified specs/capabilities:

- **Context window:** 1M native (HF/blog); 256K/262K host-served limits may apply by provider.
- **Modalities:** text, image, video in; text out (HF/blog).
- **License:** OpenMDW 1.1 (HF).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), using NVFP4/BF16 HF table as primary evidence.

- **Tool use: 74/100.** Strong agentic/tool-use signals for an open model (Terminal-Bench 2.1 ~62.8, tau2 retail/airline/telecom ~69–76, BrowseComp ~77.5, OSWorld-Verified ~52.3, IFBench ~71.5), though tau3-bench banking is weak (~17.8) and some results are offline/proprietary-eval variants.
- **Reasoning: 72/100.** Strong GPQA-Diamond (~89.9) and solid APEX/MMLU-ProX-adjacent evidence, but HLE is low (~29–31.4), AA-Omniscience index modest (~5.3), and general reasoning breadth is mixed.
- **Context window: 95/100.** 1M native context with AA-LCR v1.1 ~67.7 and GraphWalks ~90.3 indicates strong long-context capability; hosted deployments may use smaller effective windows.
- **Multimodal: 82/100.** Native image/video/document understanding is a core strength with broad benchmark coverage (V* ~86, MathVision ~77.8, OCRBench v2, MMLongBench-Doc ~62.8, CharXiv reasoning ~79.9, Video-MME v2 ~32.5, OSWorld-Verified ~52.3), though some multimodal/video reasoning tasks remain moderate.
- **Coding: 76/100.** Strong coding/engineering signals (LiveCodeBench v6 ~87.4, SWE-bench Verified ~71.1, SWE-bench Multilingual ~67.0, SWE-bench Pro ~51.3, SciCode subtask ~46.6, Terminal-Bench 2.1 ~62.8).
- **Cost efficiency: 86/100.** OpenMDW 1.1 open weights enable free self-hosting and NVFP4 supports efficient deployment; hosted pricing can be low (e.g. NanoGPT cited in metadata), but serving a 120B/12B-active MoE VLM still has infrastructure cost.
- **Overall Score: 80/100.** Mean of the five non-cost dimensions (Tool 74, Reasoning 72, Context 95, Multimodal 82, Coding 76) = 79.8, rounded to 80; strong open multimodal/long-context/agentic model, with caveats on some hard reasoning (HLE/tau3) and vendor-reported benchmark coverage.

> Caution: Primary benchmark evidence is from NVIDIA/HF model card tables (BF16/NVFP4). Independent third-party leaderboard replication was limited in this pass; some metrics are offline/proxy variants and hosted context/pricing may differ.

### Source comparison / conflicts

- **Identity/specs:** NVIDIA blog, HF card, and local metadata align on Nemotron 3.5 Super VL 120B A12B (Mamba-Transformer MoE VLM, 1M native context, text/image/video in, OpenMDW 1.1, NVFP4 artifact).
- **Benchmarks:** HF provides a detailed BF16/NVFP4 benchmark table with strong multimodal/coding/agentic/long-context results (e.g. GPQA-D 89.90, LiveCodeBench v6 87.41, SWE-bench Verified 71.07, AA-LCR v1.1 67.69, Terminal-Bench 2.1 62.78 NVFP4). Prior excluded report lacked extracted table values; this pass resolves that by direct card review.
- **Catalog coverage:** OpenRouter/AA/models.dev search pages in this pass did not surface a rich independent benchmark listing comparable to the HF card; absence treated as catalog lag, not contradiction.
- **Pricing/context serving:** Open-weights self-host is clear; hosted token pricing and served context window vary by provider (local metadata cites NanoGPT and 262K host-served context).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across NVIDIA blog, Hugging Face model cards/searches, Artificial Analysis/OpenRouter/models.dev/build.nvidia searches, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): NVIDIA Nemotron 3.5 Super VL/Bolt blog fetch, HF Nemotron-3.5-Super-VL NVFP4 card fetch, HF/NVIDIA/OR/AA/models.dev/build.nvidia search pages for bolt/super-vl, HF Bolt model search hits scan, HF `NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` card fetch, AA bolt model page fetch/scan, OpenRouter/build.nvidia bolt URL attempts/scans, HF Super VL benchmark table extraction, HF Bolt benchmark table extraction, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Nemotron 3.5 Super VL and Bolt announcement (NVIDIA blog)](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
  - [NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4 (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)
  - Local repository metadata consulted: `model/nemotron-3.5-super-vl/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
