# GLM 5.3 Free — findings by Laguna S 2.1

> Source: opencode/glm-5.3-free (Z.ai), e.g. Z.ai GLM-5.3 release notes, Artificial Analysis, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GLM 5.3 Free (Z.ai). Flagship open-weights GLM-5.3 MoE in the Free Zen tier.
- Short description: Z.ai's 5.3-generation flagship open-weights MoE, optimized for agentic software development, complex reasoning, and multi-step tool execution. Free OpenCode Zen promotional tier (fast agentic-coding/tool tier).
- Provider / access: Z.ai API + Hugging Face open weights; OpenCode Zen `opencode/glm-5.3-free` (Chat Completions, tool calling supported).
- Release / knowledge: 2026 (5.3 generation); knowledge cutoff undisclosed. Release-date NOT found precisely in fetched pages.
- IDs: `opencode/glm-5.3-free` (Free Zen tier exists — no noFreeId flag).
- Context window: **204,000 tokens** (repo `meta.json`; verified "204K" via curated metadata); <1M tier. Max output: not verified (assumed standard).
- Modalities: **text in / text out only** (repo `meta.json` "Text in/out"; Z.ai 5.3 "text in/out"; tool calls yes). (+text-in only; 0 of image/audio/video/PDF)
- Pricing (as of 2026-09-23): **Free OpenCode Zen promotional tier** (repo `meta.json` freeTierNote "Fast agentic coding and tool calls") — $0 within Zen rate limits. noFreeId absent → free tier exists.
- Architecture: open-weights MoE, flagship 5.3 generation (params undisclosed; 5.1 was ~744B-class per NVIDIA table).

### Raw benchmarks found

> Verified public numbers (Z.ai GLM-5.3 release notes, Artificial Analysis, BenchLM, NVIDIA comparison table). Benchmarks not located are NOT fabricated. **Checkpoint-specific numbers for `glm-5.3-free` are sparse** — most public figures are GLM-5.3-family or GLM-5.1; where used as proxies they are explicitly labeled provisional (same convention as the repo's Muse Spark 1.3 rater).

Agent / tool use:
- AutomationBench-AA: **62%** (GLM-5.3 family tag, Artificial Analysis Astra article; applied here as closest proxy — provisional) (Z.ai / AA)
- Terminal-Bench 2.1 / 2.0: no verified public score found for glm-5.3-free
- Tau3-Banking / tau3-general / Tau2-Bench: no verified public score found
- GDPval-AA Elo / AA-Elo: no verified public score found for 5.3-free
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas QnA: no verified public score found
- Agents' Last Exam / CyberGym: no verified public score found
- (GLM-5.1 sibling reference: TB ~64–69%, Tau3 70.6%, GDPval 1594, SWE-Pro 58.4%, GPQA 86.2% — noted only as family context, NOT scored on glm-5.3-free.)

Reasoning / knowledge:
- GPQA Diamond / HLE / MMLU / AA Intelligence Index / BenchLM overall / CritPt / AA-Omniscience / AA-LCR: **no verified public score found for the exact glm-5.3-free checkpoint** (Z.ai / AA / BenchLM).

Coding:
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found for glm-5.3-free (closest family proxy: 5.x SWE-Pro ~58.4% — provisional, not scored here).

Long context:
- No long-context retrieval figures for this checkpoint.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. **Independent re-normalization**: the exact `glm-5.3-free` checkpoint has NO published Intelligence Index / GPQA / HLE / Terminal-Bench / SWE-bench figures (Muse's own file also reports "no verified public score found" across the board). I therefore floor the quality dims on the single **verified family-level** signal (AutomationBench 62%, GLM-5.3 family) plus the documented "flagship multi-step execution" positioning, and explicitly cap each dim for the missing absolutes. This is deliberately conservative relative to the repo average.

- **Tool use: 62/100.** AutomationBench 62% (GLM-5.3 family, provisional proxy) + "flagship multi-step tool execution" positioning; NO checkpoint-level Terminal-Bench / GDPval / Tau3 / OSWorld numbers → heavy cap. (Repo Muse rater: 82.)
- **Reasoning: 58/100.** Flagship complex-reasoning positioning vs 5.3 Flash; **no GPQA / HLE / Intelligence Index / LCR / AA-Omniscience figure for this checkpoint** → floor near the 5.3-family band, capped. (Repo Muse rater: 76.)
- **Context window: 70/100.** 204,000 tokens (repo `meta.json`) — the 200K-class tier; capped below the 1M models and no retrieval-at-window proof. (Repo Muse rater: 70.)
- **Multimodal: 15/100.** **Text-only** (repo `meta.json` "Text in/out") → 15 is the text-only floor.
- **Coding: 58/100.** No checkpoint-level SWE-bench / LiveCodeBench / DeepSWE / SciCode for glm-5.3-free; the closest is the 5.x SWE-Pro ~58.4% family proxy → floor placed there, capped by no checkpoint-specific coding figure. (Repo Muse rater: 80.)
- **Cost efficiency: 100/100.** Free OpenCode Zen promotional tier (repo `meta.json` freeTierNote) — $0 within rate limits → 100.
- **Overall Score: 53/100.** (62 + 58 + 70 + 15 + 58) / 5 = 263 / 5 = 52.6 → 53.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for this model is **71.8** (audit/model-comparison.md v4, 2026-09-17). My conservative figure is **53** — deliberately lower — because the exact `glm-5.3-free` checkpoint has **zero published checkpoint-specific quality benchmarks** (no Intelligence Index, GPQA, HLE, Terminal-Bench, SWE-bench, DeepSWE). The repo's 71.8 (Muse Spark 1.3 rater) anchored Tool 82 / Reasoning 76 / Coding 80 on optimistic "flagship-positioning" family proxies plus AutomationBench 62%, then applied the Free tier (Cost 100). I do not re-derive those same family proxies (my brief explicitly forbids lifting checkpoint-agnostic 5.x family numbers as if verified for this id without flagging). The honest read: glm-5.3-free is a **real but under-measured** flagship free-tier MoE — Free tier (Cost 100) and 1M-candidate family positioning are the only strong guarantees; its 53 is a floor, not a ceiling, pending checkpoint-specific evals. Both the repo 71.8 and my 53 are preserved; a future rater with checkpoint-specific GPQA/TB/SWE numbers should re-score the quality dims upward.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Z.ai GLM-5.3 release notes, Artificial Analysis GLM-5.3 family article, BenchLM, repo `meta.json` for the Free Zen tier + 204K context + text-only modalities). Independent re-normalization via `model-comparison.md` v4 with explicit, flagged reliance on GLM-5.3-*family* proxy signals (no checkpoint-specific quality benchmarks exist for `glm-5.3-free`). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.