# GLM 5 — findings by Laguna XS 2.1

> Source: Z.ai (`opencode/glm-5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.ai's 744B/40B-active MIT MoE (200K context); started the GLM-5.x line; SWE-bench Verified 77.8%, Terminal-Bench 2.0 56.2%, $1.00/$3.20; superseded by GLM-5.3 but still competitive on base model.
- **Provider / access:** Z.ai API (`opencode/glm-5`); Hugging Face `zai-org/GLM-5` (MIT self-host); OpenCode Zen route.
- **Release / knowledge:** August 2025 release; knowledge cutoff August 2025.
- **IDs:** `opencode/glm-5`; Z.ai `zai/glm-5`
- **Context window:** 200,000 total (200K); 128,000 max output
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $1.00/$3.20 per 1M tokens; $0.20 cached; MIT weights for self-host $0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (Z.ai vendor number)
- Tau2-Bench: **89.7%** (tau2 benchmark at airline 89.7%)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **77.8%** (Z.ai vendor number)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 200K window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 56.2% is solid; Tau2 89.7% indicates strong agentic capability for retail tasks; lacks broader tool benchmarks.
- **Reasoning: 70/100.** No independent GPQA/HLE; SWE-bench 77.8% suggests competent reasoning but below frontier tier.
- **Context window: 70/100.** 200K tokens places in 200K-500K tier (70-84); 128K max output noted.
- **Multimodal: 15/100.** Text-only baseline; no vision/audio support.
- **Coding: 78/100.** SWE-bench Verified 77.8% is solid Tier-B; LiveCodeBench/DeepSWE data unavailable.
- **Cost efficiency: 85/100.** $1.00/$3.20 places in mid-high tier (~$0.60/$2.20 = ~92); MIT self-host option enhances value.
- **Overall Score: 61.6/100.** Mean of (75 + 70 + 70 + 15 + 78) / 5 = 73.6 → 75.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Z.ai docs, Hugging Face model card); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai GLM-5](https://huggingface.co/zai-org/GLM-5)
  - [Z.ai Pricing](https://docs.z.ai/guides/overview/pricing)
- Future sources: add a new file next to this one, e.g. `GLM_5_V2.md`.