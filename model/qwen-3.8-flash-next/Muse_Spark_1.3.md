# Qwen 3.8 Flash Next — findings by Muse Spark 1.3

- Source: Alibaba Qwen (Qwen/Qwen3.8-Flash-Next)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba open-weight preview of Qwen4 architecture; cost-efficient multimodal MoE for coding and long-context agents.
- **Provider / access:** HF + ModelScope weights (Qwen/Qwen3.8-Flash-Next); OpenRouter community route; Chat Completions + function calling / JSON.
- **Release / knowledge:** 2026-08-26 release; cutoff not published.
- **IDs:** `qwen/qwen3.8-flash-next`; `Qwen/Qwen3.8-Flash-Next` (HF).
- **Context window:** 262,144 native, 1M via YaRN; max output 131,072.
- **Modalities:** text/image/video in + tool-calls; text + tool-calls out. No audio.
- **Pricing (as of 2026-10-04):** no first-party price (weights $0; self-host multi-GPU). OpenRouter $0.150/$0.470 per 1M, cache $0.016.
- **Architecture:** 125B MoE (6B active) + 51B N-gram + 4B MTP; GDN+QSA; Qwen Community License 1.0.

### Raw benchmarks found

> Vendor-run (Alibaba tech report/blog, own tooling; GPT-4o grader part). No independent TB2.1, Tau3, GDPval, Claw numbers found.

Agent / tool use:

- CoWorkBench: **73.9%** (vendor, HokAI 2026-08-26)
- AndroidWorld: **84.5%** (vendor, HokAI 2026-08-26)
- Toolathlon Verified: **73.5%** (vendor, HokAI 2026-08-26)
- JobBench: **55.7%** (vendor, HokAI 2026-08-26)
- IFBench: **81.3%** (vendor, HokAI 2026-08-26)
- LVBench: **76.6%** (vendor, HokAI 2026-08-26)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vendor; LLMRef + HokAI 2026-08-26)
- HLE: **35.9%** (vendor, HokAI; trails Claude 40.0 same comparison)
- CharXiv Reasoning: **90.6%** (vendor, HokAI 2026-08-26)
- MathVision w/ CI: **95.7%** (vendor, HokAI 2026-08-26)
- RealWorldQA: **88.5%** (vendor, HokAI 2026-08-26)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **62.5%** (vendor; LLMRef 2026-08-26; vs 55.8 Qwen3.7-Plus, 53.4 Opus 4.6 Max same tooling)
- SWE-bench Multilingual: **81.0%** (vendor, HokAI 2026-08-26)
- LiveCodeBench v6: **91.9%** (vendor, HokAI 2026-08-26)
- DeepSWE 1.1: **58.7%** (vendor; LLMRef 2026-08-26; vs 54.4 DeepSeek-V4-Flash-0731)
- NL2Repo-Bench: **48.1%** (vendor, HokAI; trails DeepSeek 54.2)
- SWE-bench Verified: **no separate Verified number — scored via Pro above**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Native 262,144 (QSA: vendor claims 7.6x prefill / 4.9x decode vs Qwen3.7-Plus); 1M via YaRN; no MRCR/RULER/GraphWalks published.

### Normalized scores (1–100)

- **Tool use: 82/100.** CoWork 73.9, AndroidWorld 84.5, Toolathlon 73.5 strong; capped, no independent TB2.1/Tau3/GDPval.
- **Reasoning: 88/100.** GPQA 91.7 + CharXiv 90.6 / MathVision 95.7; capped by HLE 35.9 trailing, no Index/LCR.
- **Context window: 78/100.** 262K native (tier anchor ~70, up for 262K + 1M YaRN + 131K out); capped below 500K–1M native.
- **Multimodal: 82/100.** Text/image/video in, MathVision 95.7 / RealWorldQA 88.5; capped, no audio or non-text out.
- **Coding: 84/100.** Pro 62.5 + LCB v6 91.9 + DeepSWE 58.7 beat same-tooling comparisons; capped by NL2Repo 48.1, vendor-only harness.
- **Cost efficiency: 97/100.** Cheapest route $0.150/$0.470 in ~$0.10/$0.20 band (97–99); weights $0 but multi-GPU self-host blocks 100.
- **Overall Score: 83/100.** Mean (82+88+78+82+84)/5 = 414/5 = 82.8 → 83. Best fit: self-hosted cost-efficient coding/long-context preview where open weights matter.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-04
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
