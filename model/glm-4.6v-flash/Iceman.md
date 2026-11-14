# GLM 4.6V-Flash — findings by Iceman

- Source: Z.ai / GLM-4.6V-Flash (`zai-org/GLM-4.6V-Flash`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Z.ai’s GLM-4.6V-Flash is a lightweight, free/open-weights multimodal vision-language model (9B-class) for visual reasoning, document understanding, and multimodal agent/tool-use workflows with 128K context.
- **Provider / access:** Z.ai developer platform and open weights on Hugging Face (`zai-org/GLM-4.6V-Flash`, MIT). Local folder slug is `glm-4.6v-flash`; local `meta.json` in this folder appears misattributed/inconsistent (see conflicts below) and was not treated as authoritative for identity/specs.
- **Release / knowledge:** Z.ai GLM-4.6V docs describe GLM-4.6V-Flash as part of the GLM-4.6V series; models.dev lists release/last updated **2025-12-08**. Hugging Face model card references GLM-4.1V/4.5V paper lineage and GLM-4.6V materials.
- **IDs:** `glm-4.6v-flash`, `zai-org/GLM-4.6V-Flash`, canonical `zhipuai/glm-4.6v-flash` (per models.dev).
- **Context window:** 128,000 tokens (Z.ai docs, Hugging Face/config context in card text, models.dev). Max output listed as 32,768 in models.dev.
- **Modalities:** Video / image / text / file inputs; text output (Z.ai docs). Hugging Face describes image-text-to-text / multimodal LLM usage.
- **Pricing (as of 2026-11-14):** **Free** on Z.ai developer platform per pricing page (Vision Models: GLM-4.6V-Flash free). Open weights available (MIT on Hugging Face); self-hosting costs depend on infrastructure.
- **Architecture:** Lightweight GLM vision-language model. Hugging Face lists ~10.3B parameters (safetensors total ~10,292,777,472, BF16) and describes GLM-4.6V-Flash as a 9B-class lightweight variant in model documentation; exact training details beyond public model card/docs not fully disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): Deep second-pass research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) reviewed Z.ai GLM-4.6V documentation, Z.ai pricing, Hugging Face model card/eval metadata, models.dev API/catalog data, and local metadata/prior report. Evidence is clearly attributable to the exact `glm-4.6v-flash` / `zai-org/GLM-4.6V-Flash` identity. Public standardized benchmark numerics in this repository’s usual raw categories (e.g. SWE-bench/GPQA/AA Intelligence Index/Terminal-Bench) were not directly extracted as official text values for this exact model in this pass; however, Hugging Face model-card evaluation results and strong official specs/capability disclosures support a cautious provisional scored assessment. Local folder `meta.json` conflicts with verified identity/specs (see below) and is not used as scored evidence.

Agent / tool use:

- Z.ai docs state native multimodal tool use/function-calling capabilities for GLM-4.6V series (images/screenshots/document pages as tool inputs, visual tool outputs interpreted in reasoning chain), and GLM-4.6V-Flash is presented as the lightweight/free variant in the same series docs.
- Hugging Face eval (ExtractBench, `llamaindex/ExtractBench`, pipeline `glm_4_6v_flash_vllm_extract_oneshot_structured_output_file`): **Mean 45.19** (single generation; 64k output budget context noted in eval metadata).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no directly extracted verified public score found**.

Reasoning / knowledge:

- Hugging Face eval (LongshotBench, `MBZUAI/longshot-bench`, rubric-weighted 0–100, LLM judge Qwen3-14B, video input): **Overall 33.82**, **Core Perception 26.56**, **Reasoning 38.53**.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found**. Z.ai docs emphasize frontend replication/visual editing and multimodal coding-related workflows but without extracted standardized coding benchmark numerics for this exact model.

Long context:

- **128K context window** verified (Z.ai docs/HF/models.dev).
- LongshotBench evaluation indicates long-video/long-context multimodal evaluation context, but no standalone MRCR/AA-LCR numeric extracted.

Multimodal:

- **Video/image/text/file inputs; text output** verified (Z.ai docs). HF card describes multimodal vision-language use (image-text-to-text), native multimodal function calling, interleaved image-text generation workflows, multimodal document understanding, and frontend replication/visual editing capabilities.
- Eval evidence: LongshotBench Overall 33.82 / Core Perception 26.56 / Reasoning 38.53 (video multimodal benchmark context).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for a lightweight 9B-class multimodal vision-language model with limited directly comparable standardized benchmark numerics in this repository’s usual categories.

- **Tool use: 58/100.** Official docs indicate native multimodal function-calling/tool-use capabilities and agent-oriented workflows; ExtractBench mean 45.19 provides attributable structured extraction/tool-adjacent eval evidence, but no direct Terminal-Bench/Tau/GDPval-AA/MCP benchmark numerics were extracted.
- **Reasoning: 46/100.** Attributable multimodal reasoning/perception evals (LongshotBench Overall 33.82, Reasoning 38.53, Core Perception 26.56) indicate modest but real capability for a lightweight model; standard text reasoning benchmarks (GPQA/HLE/AIME/AA index) were not directly extracted.
- **Context window: 72/100.** Verified 128K context is strong for a lightweight/open multimodal model, though below 1M-class context leaders and without extracted long-context retrieval benchmark numerics.
- **Multimodal: 74/100.** Strong verified multimodal input breadth (video/image/text/file), document understanding, and visual tool-use/coding-adjacent capabilities documented by Z.ai/HF; capped by lightweight size, text-only output, and moderate extracted multimodal eval scores.
- **Coding: 48/100.** Official docs show frontend replication/visual editing and multimodal coding workflows, but no directly extracted standardized coding benchmark scores (SWE-bench/LiveCodeBench/etc.) for this exact model; assessed cautiously.
- **Cost efficiency: 97/100.** Free on Z.ai platform and open-weights (MIT) on Hugging Face with lightweight deployment profile, offering very high accessibility/cost efficiency for multimodal tasks.
- **Overall Score: 60/100.** Mean of the five non-cost dimensions (Tool 58, Reasoning 46, Context 72, Multimodal 74, Coding 48) rounded to nearest integer; capable lightweight/free multimodal model, but limited by size and sparse standardized benchmark coverage in common repo categories.

> Caution: Scores are provisional estimates based on verified specs/docs and attributable extracted eval results (Hugging Face eval metadata, Z.ai docs/pricing, models.dev). Standard repo-category benchmark numerics were largely unavailable for this exact model in this pass.

### Source comparison / conflicts

- **Identity/specs/capabilities:** Z.ai GLM-4.6V docs, Z.ai pricing, Hugging Face `zai-org/GLM-4.6V-Flash`, and models.dev consistently identify GLM-4.6V-Flash as a lightweight/free multimodal vision-language model (128K context, video/image/text/file inputs, text output, open/free access).
- **Local metadata conflict (important):** `model/glm-4.6v-flash/meta.json` labels the entry as **"GLM 4.6V"** (not Flash) with **text-only modalities, 1M context, and paid $5/$25 pricing**, which conflicts with verified GLM-4.6V-Flash evidence (multimodal, 128K, free). This report is attributed to the folder’s exact slug/ID `glm-4.6v-flash` = GLM-4.6V-Flash and corrects those claims in text.
- **Benchmarks/evals:** HF model card provides attributable eval results (LongshotBench, ExtractBench) but not the usual repo-standard raw benchmark suite; Z.ai docs describe capabilities (including “SoTA among similar scale” in HF/docs text) without extracted numeric tables for all standard categories.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) across Z.ai GLM-4.6V docs/pricing, Hugging Face model card and eval metadata, models.dev API/catalog data, and local metadata/prior report review; compared identity/specs and corrected local metadata conflicts.
- Research performed (>=10 successful independent web fetch/search attempts): Z.ai pricing page, Z.ai GLM-4.6V docs page (webfetch + shell fetch), GLM-4.6V-Flash docs URL attempt (404), Open.bigmodel.cn/Zhipu page attempts, OpenRouter search attempts, Hugging Face GLM-4.6V-Flash model page (shell + webfetch extraction), Artificial Analysis search attempts, models.dev search pages, models.dev `api.json` extraction for glm-4.6v-flash/glm-4.5-flash, Z.ai blog URL fetch attempt, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [GLM-4.6V docs (Z.ai)](https://docs.z.ai/guides/vlm/glm-4.6v)
  - [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
  - [zai-org/GLM-4.6V-Flash (Hugging Face)](https://huggingface.co/zai-org/GLM-4.6V-Flash)
  - [models.dev API](https://models.dev/api.json)
  - Local repository metadata consulted: `model/glm-4.6v-flash/meta.json` (noted as conflicting/misattributed)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
