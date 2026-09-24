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

> All scores provisional: only AutomationBench-AA 62% is measured (family proxy);
> the rest derive from verified context/pricing facts and conservative class
> medians per the delegator's mandatory-normalization rule — never invented rows.

- **Tool use: 60/100.** AutomationBench-AA 62% (family proxy, provisional) is the sole tool signal; zero Terminal-Bench/Tau3/GDPval/Claw rows for this checkpoint caps it at the provisional floor.
- **Reasoning: 55/100.** No checkpoint GPQA/HLE/Index numbers; conservative provisional mid-band for an unscored flagship (family GLM-5.1 GPQA 86.2% noted as context only, not scored).
- **Context window: 70/100.** Verified 204K tokens maps to the 200K tier; no retrieval figures and unverified max output.
- **Multimodal: 15/100.** Text in/out only per repo meta.json and Z.ai 5.3 — the text-only floor.
- **Coding: 55/100.** No checkpoint SWE/LiveCodeBench/SciCode numbers (family 5.x SWE-Pro ~58.4% provisional context only); conservative provisional mid-band.
- **Cost efficiency: 100/100.** $0 Free Zen promotional tier (fast agentic-coding/tool tier per freeTierNote).
- **Overall Score: 51/100.** Mean of the five quality dims (60+55+70+15+55)/5 = 51.0. Best fit: zero-cost provisional pick for agentic coding drafts until checkpoint benchmarks publish; re-score when measured rows land.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public internet research (Z.ai GLM-5.3 notes, Artificial Analysis, BenchLM, NVIDIA table, repo meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.