# Nemotron 3.5 Super VL — findings by Cat Jam

- Source: NVIDIA / Nemotron 3.5 Super VL 120B-A12B (`opencode/nemotron-3-5-super-vl`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL (open weights, NVIDIA NIM/NVFP4)
- **Short description:** NVIDIA's 120B/12B-active hybrid Mamba2 MoE visual agent model for long-horizon specialized agents; text/image/video in; text out. OpenMDW-1.1, quantized.
- **Provider / access:** NIM on Build (NGC + HF BF16/NVFP4); served on various providers (vLLM/TRT). No direct OpenAI-style "API key" universally; third-party provider hosting may exist. Knowledge cutoff not in docs.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` (HF)
- **Context window:** Up to 1,000,000 tokens (deployment recipes may use 262K–1M; max token cost/graph).
- **Modalities:** Text, image, video (urls or files); text out. Reasoning configurable `enable_thinking=True/False` via chat template. Tool calling, structured formats.
- **Pricing:** Cloud service pricing from NIM not given in sampled docs (third-party hosting on vLLM). Available as free NIM/HF weights for self-host. Self-hosting resource demands: NVFP4 min 1×H200/B200 etc.
- **Architecture:** 120B total / 12B active; 512 routed experts per MoE layer; C-RADIO vision encoder; Mamba2 + attention. NVFP4 quantized with quantization-aware distillation. MTP speculative drafter. OpenMDW-1.1.

### Raw benchmarks found (NVIDIA model card table)

Agent / tool use:

- SWE-bench Verified: 71.10% (not 80); SWE Pro: 51.78; SWE Multilingual 67.72; Terminal-Bench 2.1 60.67
- DeepSWE: 24.65 (offline listed) – notably much lower vs vendor/AA? likely a harder internal or harness variant
- GDPval-AA v2: 1211 (Elo?) 
- BrowseComp (offline): 78 
- WebVoyager 77.72
- AA-Briefcase-Lite: 1137(-)
- AutomationBench-AA 32.44; GDP.pdf 6.6; TB4 [offline] 1? (maybe 1.0?).
- OSWorld-Verified: 51.14
- Toolathlon-Verified? Not in list sampled (model card table doesn't include).

Reasoning / knowledge:

- GPQA-Diamond: 89.52
- HLE full set: 29.20 (text-only)
- MMLU-ProX 76.91
- AA-Omniscience accuracy: 26.20; hallucination 30.0%; index 4.03
- APEX shortlist: 88.36
- LiveCodeBench v6: 88.22
- SciCode subtask: 47.13
- AA-LCR v1.1: 68.62
- GraphWalks: 89.71
- IFBench: 70.86
- LMArena proxy: 52.67
- tau2 retail/airline/telecom: 69.24/76.50/73.19; tau3 banking 18.88

Coding:

- SWE-Verified 71.10, SWE-Pro 51.78, LCB 88.22, SciCode 47.13, DeepSWE 24.65, TB2.1 60.67.

Multimodal:

- CharXiv reasoning 80.82/79.88; MathVision 78.16; MMLongBench-doc 62.82; OCRReasoning 65.08; OSWorld 51.14; Video-MME v2 32.85; BabyVision 29.60; V* 85.60; OCRBench EN 68.1

Long context:

- GraphWalks 89.71; MRCR? not in sampled table? no explicit MRCR. LCR 68.62.
- Context up to 1M.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 78, OSWorld 51.14, TB2.1 60.67, GDPval 1211 Elo low; MCP? not in list. cap 78.
- **Reasoning: 84/100.** GPQA 89.5, HLE 29.2, AA index 5.05? (AA-Omniscience index 4.03), LCR 68.62, APEX 88.36.
- **Context window: 95/100.** GraphWalks 89.71, LCR 68.62 at large input; 1M context supported natively.
- **Multimodal: 82/100.** CharXiv 80.82, MathVision 78.16, OSWorld 51.14, V* 85.60, Video-MME v2 low 32.85 caps overall video; but solid doc understanding.
- **Coding: 76/100.** SWE-Verified 71.10, SWE-Pro 51.78, TB2.1 60.67; DeepSWE 24.65, LiveCodeBench 88.22. 
- **Cost efficiency: 86/100.** Open weights MIT / NVFP4, free download; hardware self-host expensive but no per-token fee.
- **Overall Score: 83/100.** Mean (78+84+95+82+76)/5 = 83.0.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (NVIDIA NIM card, vLLM blog, NGC/HF); scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.
- Note: strong on efficiency/multimodal tasks. Prefer official benchmarks as listed (BF16 vs NVFP4 close)
