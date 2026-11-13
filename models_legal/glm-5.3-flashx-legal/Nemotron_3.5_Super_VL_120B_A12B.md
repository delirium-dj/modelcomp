# GLM-5.3-FlashX-Legal — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Z.AI (`glm-5.3-flashx-legal`), GLM-5.3-Flash/FlashX family
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal
- **Short description:** Specialized legal variant of GLM-5.3-FlashX, part of the GLM-5 series. First native multimodal model in the GLM-5 series with 320B total parameters, 18B activated. Designed for legal workflows (AutoClaw Legal Assistant), document analysis, contract review, and compliance research.
- **Provider / access:** Z.AI (docs.z.ai), Chat Completion API; also available directly in AutoClaw. Model code `glm-5.3-flashx-legal`. Sibling variants: `glm-5.3-flash`, `glm-5.3-flashx`.
- **Release / knowledge:** GLM-5.3-FlashX is live; GLM-5.3-FlashX-Legal announced November 13, 2026 via AutoClaw.
- **IDs:** `glm-5.3-flashx-legal` (model code). No dedicated public API endpoint confirmed beyond Z.AI and AutoClaw.
- **Context window:** 1M tokens context length; maximum output 128K tokens.
- **Modalities:** Video/image/text/file in; text out. Native multimodal visual coding; visual capabilities built into coding loop. Tool calling, web search, structured outputs.
- **Pricing (as of 2026-11-11):** Available on GLM Coding Plan and via AutoClaw; explicit per-token pricing not disclosed on fetched sources. FlashX delivers 200 tokens/s inference speed.
- **Architecture:** 320B total / 18B activated parameters; hybrid sparse + linear attention (first open-source frontier model to combine both); reduces attention computation and KV cache by 3.01x and 4.44x vs GLM-5.3.

### Raw benchmarks found

Legal-specific benchmark scores from the AutoClaw announcement (Nov 13, 2026):
- Harvey LAB: **19.2% all-pass rate** — 12.5 percentage points above its base model <(AutoClaw blog)>
- LegalBench: matched frontier models (no specific score published) <(AutoClaw blog)>
- PLawBench: matched frontier models (no specific score published) <(AutoClaw blog)>

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Function calling, tool streaming output, web search, structured outputs; specialized legal agent (AutoClaw Legal Assistant); capped by absence of published general tool-use benchmark scores.
- **Reasoning: 75/100.** Reasoning mode supported (thinking.type enabled, reasoning_effort max recommended); matched frontier models on LegalBench/PLawBench; capped by absence of public general reasoning benchmark scores.
- **Context window: 92/100.** 1M-token context with 128K max output; verified on Z.AI docs; capped because no published long-context retrieval scores at full window.
- **Multimodal: 80/100.** Native multimodal — video/image/text/file input, text output; visual capabilities built into coding loop; capped by no published vision benchmark scores.
- **Coding: 78/100.** Native multimodal visual coding (observes interfaces, rendered results, interaction feedback); part of GLM Coding Plan; capped by absence of public coding benchmark scores (SWE-bench, LiveCodeBench).
- **Cost efficiency: 80/100.** FlashX variant delivers 200 tokens/s inference; hybrid sparse+linear attention reduces KV cache 4.44x; not counted toward Overall.
- **Overall Score: 81/100.** Half-up mean of (80 + 75 + 92 + 80 + 78) / 5 = 81. Best-fit recommendation: specialized legal multimodal model for document analysis and legal workflows; verify on legal-specific benchmarks before production use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Z.AI developer documentation, AutoClaw announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3-Flash/FlashX — Z.AI developer docs](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [GLM-5.3-flashX-Legal — AutoClaw announcement](https://autoclaw.z.ai/blog/model/GLM-5.3-flashX-Legal/)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.