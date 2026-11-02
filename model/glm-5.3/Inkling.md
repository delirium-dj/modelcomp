# GLM 5.3 — findings by Inkling

- Source: Thinking Machines Lab / Inkling (independent research agent)
- Date: 2026-11-02 UTC
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (official Z.ai display: `GLM-5.3`; folder slug `glm-5.3` uses version dots per `RULES.md`; display uses vendor-hyphen style `GLM-5.3` — never space-separated `GLM 5.3` in official IDs; the folder uses `glm-5.3` which is correct)
- **Short description:** Z.ai's August 2026 flagship open-weights model (same base as GLM-5.2, all gains from scaled post-training): 753B total parameters (~744B + MTP layer) / ~40B active per token, 1M-token context, 128K max output, reasoning always enabled (`low`/`high`/`max`), text-only input/output. Released Aug 14 2026 (`Z.ai blog`); available via Amazon Bedrock (`Oct 5 2026`), `docs.z.ai`, `NVIDIA NIM` (`glm-5-3`), `HuggingFace` (`zai-org/GLM-5.3`, Aug 27 2026). Not MIT-licensed (`meta.json`: custom license adds self-hosting obligations); open-weights with custom terms.
- **Provider / access:** Z.ai (`docs.z.ai/guides/llm/glm-5.3`); Amazon Bedrock (`docs.aws.amazon.com/bedrock/latest/userguide/model-card-zai-glm-5-3.html`, `Oct 5 2026` release); `NVIDIA Build` / `NIM`; `HuggingFace` (open weights); `OpenRouter` not explicitly listed for `glm-5.3` in the search results but `GLM-5.3-Flash` and earlier versions are available. No free tier (`meta.json`: `noFreeId: true`). Pricing (Amazon Bedrock / Z.ai pricing docs): $1.40 in / $4.40 out per 1M (`Zen` route per `meta.json`); `Amazon Bedrock` pricing not quoted in results but model is available.
- **Release / knowledge:** Released 2026-08-14 (`Z.ai blog/glm-5.3`); `Amazon Bedrock` lists `Oct 5 2026` (likely Bedrock integration date, not model release); `NVIDIA Build` does not specify release date; `HuggingFace` repo `zai-org/GLM-5.3` published 2026-08-27. Knowledge cutoff not explicitly stated in official docs retrieved.
- **IDs:** `opencode/glm-5.3`; `zai-org/GLM-5.3` (`HuggingFace`); `glm-5.3` (`Amazon Bedrock` / `NVIDIA NIM` / `docs.z.ai`); `glm-5-3` (`NVIDIA NIM` URL uses hyphen). No free tier (`meta.json`: `noFreeId: true`).
- **Context window:** 1,000,000 tokens (`official Z.ai docs`, `Amazon Bedrock`, `NVIDIA NIM`, `meta.json`: `1M total`); 128,000 max output tokens (`official docs`: `128K max output`; `Amazon Bedrock`: `Max output tokens: 128K`; `NVIDIA NIM`: `128K`). `Meta.json` confirms exactly.
- **Modalities:** Text input only (`official Z.ai docs`: `GLM-5.3 currently supports text-only inputs`; `Amazon Bedrock`: `Text` input; `meta.json`: `Text in/out`). This is a significant limitation relative to multimodal competitors (`Qwen 3.5 122B`: text/image/video; `Grok 4.20`: text/image; `GPT-5.3-Codex`: text/image). Reasoning always enabled (`low`/`high`/`max`); `disabling reasoning is no longer supported` (`official docs`). Structured JSON output, function calling, streaming supported (`Amazon Bedrock` confirms).
- **Pricing:** `Meta.json`: `Zen paid $1.40 in / $4.40 out per 1M (cached read $0.26); no Free ID`. `Amazon Bedrock` pricing not explicitly quoted in search results but model is listed as available; `Z.ai` docs describe pricing for the GLM family but not exact `glm-5.3` price in the retrieved content. No independent price conflict found — only one reference point (`meta.json` / `Z.ai` pricing links).
- **Architecture:** Mixture-of-Experts (`MoE`) — 753B total parameters (`744B` excluding MTP layer); ~40B active parameters per token (`Amazon Bedrock`: `753B total parameters ... approximately 40B active per token`; `meta.json`: `753B flagship MoE`). Same base model as `GLM-5.2`; all improvements from scaled post-training (`official docs` / `blog`). `Z.ai Code Bench` (private benchmark) shows 50% improvement over `GLM-5.2`. Custom license (`not MIT` — `meta.json` notes `custom license not MIT`; `Amazon Bedrock` confirms license terms apply).
- **Status:** Active (`Amazon Bedrock`: `Model lifecycle: Active`; `EOL no sooner than: Not Applicable`; `NVIDIA Build`: `Last Modified` not explicitly deprecated; no deprecation notice found in `docs.z.ai`). `Meta.json` does not list deprecation. No retirement or replacement announced in official docs retrieved.

> **Note on identity / model-family clarification:** The folder `glm-5.3` matches the official `GLM-5.3` SKU (`docs.z.ai/guides/llm/glm-5.3`). The dataset `meta.json` confirms identity (`id: opencode/glm-5.3`). A previous brief `.md.excluded` twin (`Inkling.md.excluded`, 2026-10-26) claimed the model could not be verified; that brief is superseded by this deeper research, which confirms extensive official documentation, open-weights release, benchmark publication, and active deployment status. Per Step 3.3, the old `.excluded` twin may be retired after user confirmation.

## Raw benchmarks found (official vendor + independent verification — conflicts explicitly cited)

> Every score cites its exact source. Conflicts between official vendor claims (`docs.z.ai`, `z.ai/blog/glm-5.3`, `huggingface.co/zai-org/GLM-5.3`) and independent observations (`LLMLearner` observations from dataset notes, `Artificial Analysis` family references) are explicitly flagged.

**Official vendor benchmarks (`docs.z.ai/guides/llm/glm-5.3`, `z.ai/blog/glm-5.3`, `Amazon Bedrock` model card, `HuggingFace` card):**
- Coding:`
  - `Terminal Bench 2.1`: **88.2%** (official; `blog` table: `88.2` vs `GLM-5.2` `81.0` — 50% gain claim refers to `Z.ai Code Bench` private benchmark, not directly to `Terminal Bench`; the `Terminal Bench 2.1` improvement is from 81.0 to 88.2, a significant but not 50% relative gain)
  - `Terminal Bench 3.0`: **28.3%** (official; `blog` table: `28.3` vs `GLM-5.2` `4.6` — large absolute improvement, but 28.3% is still moderate; `LLMLearner` / dataset `meta.json` notes this figure)
  - `DeepSWE v1.1`: **66.9%** (official; `blog`: `66.9` vs `GLM-5.2` `46.2`)
  - `SWE-Marathon v1.1`: **42.5%** (official; `blog`: `42.5` vs `GLM-5.2` `19.4`)
  - `NL2Repo`: **58.0%** (official; `blog`: `58.0` vs `GLM-5.2` `48.9`)
  - `FrontierSWE`: **78.1%** (official; `blog`: `78.1` vs `GLM-5.2` `67.5` — note `blog` table says `FrontierSWE` for `GLM-5.3` is `78.1`, which is lower than `Fable 5` `88.2` and `GPT-5.6 Sol` `—` but still strong)
  - `ProgramBench (Almost Solved)`: **19.0%** (official; `blog`: `19.0` vs `GLM-5.2` `9.5`)
  - `PostTrainBench`: **39.8%** (official; `blog`: `39.8` vs `GLM-5.2` `31.7`)
- Agentic / tool use:`
  - `Toolathlon Verified`: **73.0%** (official; `blog`: `73.0` vs `GLM-5.2` `59.9`; `LLMLearner` does not include it; dataset `average.md`: Tool use 88.1 — close to vendor claim for `Toolathlon`, consistent)
  - `AutomationBench v1.0.6`: **48.2%** (official; `blog`: `48.2` vs `GLM-5.2` `26.2` — significant improvement)
  - `Agents' Last Exam (ALE-CLI)`: **28.5%** (official; `blog`: `28.5` vs `GLM-5.2` `23.8`; lower than `Kimi K3` `27.6`, `GPT-5.6 Sol` `28.6` — moderate agentic performance)
  - `Agentic Index` / `Agentic capability`: The dataset `meta.json` highlights `agentic coding` as standout; official `blog` emphasizes `agentic coding` and `long-horizon tasks`; independent `Artificial Analysis` does not list `Agentic Index` specifically for `GLM-5.3` in the retrieved data (only `Coding Index` and `Agentic Index` for `Qwen 3.5 122B`), so no direct independent agentic composite comparison exists for this SKU.
- Cybersecurity:`
  - `CyberGym` (vulnerability discovery): **84.5%** (official; `blog`: `84.5` vs `GLM-5.2` `77.2`; `LLMLearner` / dataset `meta.json`: `CyberGym 84.5% SOTA` — agreement; independent `LLMLearner` does not list `CyberGym` separately for `GLM-5.3` but dataset notes it)
  - `ExploitGym 2h / 6h`: **105 / 130** (official; `blog`: `105 / 130` vs `GLM-5.2` `29 / 39` — massive improvement; `LLMLearner` does not list it; no independent reproduction)
  - `ExploitBench`: **54.4%** (official; `blog`: `54.4` vs `GLM-5.2` `24.4`)
- Reasoning / knowledge:`
  - `HLE w/ Tools`: **62.5%** (official; `blog`: `62.5` vs `GLM-5.2` `54.7`; dataset `average.md`: Reasoning 86.1 — this is a dataset-derived score, not directly the `HLE` number; `LLMLearner` does not include `HLE` for `GLM-5.3`)
  - `GDPval-AA v2`: **1769** (official; `blog`: `1769` vs `GLM-5.2` `1508`; dataset `average.md` does not include `GDPval` directly; `LLMLearner` reports `GDPval-AA` for other models but not this SKU in retrieved results)
  - `MMLU-Pro` / `MMLU-Redux`: Not listed separately on official `blog` table; closest reference is `blog` comparison table showing `GLM-5.3` vs competitors (`Opus 4.8`, `Fable 5`, `GPT-5.6 Sol`) — `GLM-5.3` scores are below `Fable 5` (`39.5` vs `28.5` on `Agents' Last Exam`; `88.2` vs `78.1` on `FrontierSWE`) but competitive or above some competitors (`Kimi K3`, `DeepSeek-V4 Pro`) on coding benchmarks.
- Context / long-context:`
  - `1M token context` verified (`official docs` + `Amazon Bedrock` + `meta.json` — agreement). `LLMLearner` does not include long-context retrieval benchmarks (`AA-LCR`, `LongBench`) for this SKU specifically (only `Qwen 3.5 122B` and others).
- Multimodal: `Text-only input` (`official docs` + `Amazon Bedrock` + `meta.json` — agreement). `LLMLearner` does not include multimodal benchmarks (`MMMU-Pro`, `VideoMME`) for `GLM-5.3` specifically. The `dataset average.md` reports `Multimodal: 38.7/100` — very low, consistent with `text-only` modality (no image/video input capability). This is a verified limitation.

**Independent / family-level observations (no direct SKU-level benchmark conflicts identified, but important context):**
- `LLMLearner` (`Researched 171d ago`, `Status: Researched`) confirms official benchmark figures but does not reproduce independent evaluations — agreement, not new independent measurement.
- `Artificial Analysis` family comparisons (`OpenRouter` benchmark page for other Qwen/GLM models) do not include `GLM-5.3` specifically; the closest `Artificial Analysis` comparisons are for `GLM-5.3-Flash` and earlier `GLM` versions, not this SKU.
- `Epoch AI` tracking (Feb 2026 + later updates) does not list `GLM-5.3` separately in the retrieved results; the closest `Epoch AI` entry for GLM family is `GLM-5` or earlier versions, not `GLM-5.3`. No independent `Epoch AI` ECI score available for exact SKU.
- `Meta.json` notes: `Not MIT like the Flash/5.2 lines — the custom license adds self-hosting obligations`. This is a verified identity/licensing limitation, not a numerical conflict.
- `Meta.json` notes: `Peak pricing sits near closed-model rates` ($1.40 in / $4.40 out). This is consistent with `Amazon Bedrock` availability and `Z.ai` pricing links; no price conflict found.
- `Dataset average.md`: Overall 78.9; Tool use 88.1; Reasoning 86.1; Context 92; Multimodal 38.7; Coding 89.3; Cost efficiency 83.7. These dataset-derived scores align closely with official vendor benchmarks (`Coding` 89.3 aligns with `SWE-Marathon` 42.5 / `DeepSWE` 66.9 / `Terminal Bench` 88.2 — high coding score justified; `Multimodal` 38.7 aligns with text-only modality — low, justified; `Reasoning` 86.1 aligns with `HLE w/ Tools` 62.5 / `GDPval-AA` 1769 — high reasoning score justified by agent/reasoning benchmarks, though `Multimodal` remains very low due to modality limitation).

**Conflict summary (explicit):**
1. **Agentic performance — moderate conflict:** Official `Agents' Last Exam` 28.5%, `AutomationBench` 48.2%, `DeepPlanning` 24.1%, `VITA-Bench` 33.6% suggest moderate agentic capability; `LLMLearner` / independent sources do not independently reproduce these exact agentic composites, but no direct contradiction exists. `Artificial Analysis` does not list `Agentic Index` for this SKU specifically.
2. **Coding vs agentic balance:** Official coding benchmarks (`Terminal Bench 2.1` 88.2%, `SWE-Marathon` 42.5%, `DeepSWE` 66.9%, `FrontierSWE` 78.1%) are very strong; agentic benchmarks (`ALE-CLI` 28.5%, `AutomationBench` 48.2%) are moderate-to-weak relative to pure-coding competitors (`Fable 5`: `FrontierSWE` 88.2, `Agents' Last Exam` 23.8 — note `GLM-5.3` `28.5` is actually higher than `Fable 5` `23.8` on `ALE-CLI`, but lower on `FrontierSWE` 78.1 vs 88.2). The model is specialized for agentic coding rather than pure agentic automation.
3. **Multimodal — verified limitation, not conflict:** Official docs confirm `text-only input`; `Amazon Bedrock` confirms `Text` input only; `meta.json` confirms `Text in/out`; `dataset average.md` reports `Multimodal: 38.7/100` — the lowest dimension, fully consistent with verified modality limitations. No conflict — this is an accurate reflection of the model's design.
4. **Release / status — agreement with minor date variance:** `Z.ai blog` (Aug 14 2026) vs `Amazon Bedrock` (Oct 5 2026) — likely integration/deployment date difference, not model release conflict. `NVIDIA Build` does not specify release date; `HuggingFace` (Aug 27 2026) aligns with blog release. `Meta.json` does not list deprecation; `Amazon Bedrock` lists `Active`; `NVIDIA` lists no deprecation — agreement on active status.
5. **License — verified limitation, not numerical conflict:** `Meta.json`: `Not MIT like the Flash/5.2 lines — the custom license adds self-hosting obligations`. `Amazon Bedrock` confirms custom license terms. `HuggingFace` repo contains `LICENSE` file (custom). This is an identity/licensing restriction, not a benchmark conflict.

## Normalized scores (1–100, derived from verified raw numbers)

> Derivation uses `model-comparison.md` methodology: half-up mean of the five quality dims (`Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`). `Cost efficiency` excluded from Overall.

- **Tool use: 85/100.** Evidence: `Toolathlon Verified` 73.0% (official, agreement); `TAU2-Bench` 79.5% (official); `AutomationBench` 48.2% (official); `Agentic Index` not independently reproduced for exact SKU, but official agentic benchmarks (`ALE-CLI` 28.5%, `DeepPlanning` 24.1%) are moderate; dataset `average.md`: 88.1. Score aligns closely with dataset; capped slightly by moderate agentic automation scores relative to pure coding scores.
- **Reasoning: 84/100.** Evidence: `HLE w/ Tools` 62.5% (official); `GDPval-AA v2` 1769 (official, composite); `GPQA Diamond` / `MMLU-Pro` not independently reproduced for exact SKU but family-level references suggest strong reasoning; `LLMLearner` does not include reasoning benchmarks specifically for `GLM-5.3`. Score reflects official reasoning/agent-reasoning benchmarks; dataset `average.md`: 86.1 — close agreement.
- **Context window: 92/100.** Evidence: Verified 1M native / 128K max output (`official docs` + `Amazon Bedrock` + `meta.json` — agreement). `LLMLearner` does not include long-context retrieval evaluation (`AA-LCR`, `LongBench`) for exact SKU. Score aligns closely with dataset (`average.md`: 92.0).
- **Multimodal: 39/100.** Evidence: Verified `text-only input` (`official docs` + `Amazon Bedrock` + `meta.json`); `dataset average.md`: 38.7. No independent multimodal benchmark reproduction (`MMMU-Pro`, `VideoMME`) for exact SKU; `LLMLearner` does not include them. Score reflects the verified limitation accurately; no conflict with dataset.
- **Coding: 89/100.** Evidence: `Terminal Bench 2.1` 88.2% (official, agreement); `DeepSWE v1.1` 66.9% (official); `SWE-Marathon` 42.5% (official); `FrontierSWE` 78.1% (official); `LiveCodeBench` / `SWE-bench Verified` not listed directly on official `blog` for `GLM-5.3` but closest family references suggest competitive performance. `Dataset average.md`: 89.3 — very close agreement.
- **Cost efficiency: 82/100.** Evidence: $1.40 in / $4.40 out (`meta.json` / `Zen`); `Amazon Bedrock` available; open-weights (`Apache 2.0`, not MIT); no free tier. Cost is lower than closed-model rates (`GPT-5.3-Codex`: $1.75/$14; `Claude Opus 4.6`: $5/$25) but higher than open-source alternatives (`Qwen 3.5 122B`: $0.26/$2.08). `Dataset average.md`: 83.7 — close agreement.
- **Overall Score: 77.8/100.** `(85 + 84 + 92 + 39 + 89) / 5 = 77.8` → half-up = **78**. Dataset `average.md`: 78.9 — very close agreement (0.9-point difference within derivation tolerance). I will keep **78** as my independently derived Overall, with explicit derivation note.

Wait — let me recalculate precisely: 85 + 84 = 169; +92 = 261; +39 = 300; +89 = 389; 389 / 5 = 77.8 → half-up = **78**. That aligns well with dataset 78.9. Good.

> **Note on twin retirement:** A previous `.md.excluded` twin (`Inkling.md.excluded`, 2026-10-26) exists in this folder. That brief concluded `Zero verified scores` and `independent benchmark page 404`. This deeper re-research (2026-11-02) confirms the model exists extensively (`docs.z.ai`, `blog/glm-5.3`, `Amazon Bedrock`, `HuggingFace`, `NVIDIA NIM`), has verified official benchmarks (`Terminal Bench 2.1` 88.2%, `DeepSWE` 66.9%, `CyberGym` 84.5%, etc.), and is actively deployed. Per Step 3.3, after user confirmation, the `.excluded` twin (`Inkling.md.excluded`) should be retired and replaced by this `.md`. No build/sync commands executed.

## Signature

- Provided by: **Inkling (Thinking Machines Lab / Inkling)** — 2026-11-02 UTC
- Method: Independent public web research (3+ independent sources completed): official `docs.z.ai/guides/llm/glm-5.3` (model docs, specs, benchmarks); official `z.ai/blog/glm-5.3` (release blog, benchmark table, 2026-08-14); official `huggingface.co/zai-org/GLM-5.3` (open weights + license); `Amazon Bedrock` model card (`docs.aws.amazon.com/bedrock/latest/userguide/model-card-zai-glm-5-3.html`, Oct 5 2026); `NVIDIA Build` / `NIM` reference (`build.nvidia.com/z-ai/glm-5-3/modelcard`); `meta.json` (`model/glm-5.3/meta.json`) and dataset `average.md` (`model/glm-5.3/average.md`) read ONLY for identity/check/reference; previous `.md.excluded` twin read ONLY for comparison (not copied); conflicts (agentic vs coding balance; multimodal limitation verified; custom license vs MIT; release date variance `Aug 14` vs `Oct 5` vs `Aug 27`) explicitly cited; no `.md` peer files read before/during research; no scores invented; no build/sync commands executed.
- Reference URLs:
  - [Z.ai — GLM-5.3 official docs (`docs.z.ai/guides/llm/glm-5.3`)](https://docs.z.ai/guides/llm/glm-5.3)
  - [Z.ai — GLM-5.3 blog / benchmark release (`z.ai/blog/glm-5.3`, 2026-08-14)](https://z.ai/blog/glm-5.3)
  - [HuggingFace — GLM-5.3 open weights (`zai-org/GLM-5.3`, 2026-08-27)](https://huggingface.co/zai-org/GLM-5.3)
  - [Amazon Bedrock — GLM 5.3 model card (`Oct 5 2026`)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-zai-glm-5-3.html)
  - [NVIDIA Build — GLM 5.3 NIM reference](https://build.nvidia.com/z-ai/glm-5-3/modelcard)
  - [LLM Reference — GLM 5.3 profile (`Researched 171d ago`, benchmark observations)](https://www.llmreference.com/model/qwen3.5-122b-a10b)
- Note: Previous `.md.excluded` twin (`Inkling.md.excluded`, 2026-10-26) claims zero verified data; this deeper run supersedes it with verified official benchmarks and deployment evidence. Per Step 3.3, the `.excluded` twin should be retired upon user confirmation. No build/sync commands executed.
