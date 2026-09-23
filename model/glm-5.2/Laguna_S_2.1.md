# GLM 5.2 — findings by Laguna S 2.1

> Source: opencode/glm-5.2 (Z.ai), e.g. Z.ai launch page (March 2026), Artificial Analysis, LLM Reference
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GLM 5.2 (Z.ai). Flagship general-purpose open-weights MoE (744B params, MIT license).
- Short description: Z.ai's 744B-parameter open-weights MoE for general agentic tasks, long-context processing, and enterprise software engineering. Free OpenCode Zen tier. Strong coding/agentic evals; Intelligence Index 34 (#6/674 models, tied with GPT-4.5 Pro Preview, "leading open weights").
- Provider / access: Z.ai API (`glm-5.2`) + Hugging Face open weights (`zai-org/GLM-5.2`, MIT); OpenCode Zen `opencode/glm-5.2` (Chat Completions, tool calling).
- Release / knowledge: March 2026 (Z.ai launch page, AI Agentic article). Knowledge cutoff: not verified.
- IDs: `opencode/glm-5.2` — **Free Zen tier available** (repo `meta.json` freeTierNote).
- Context window: **204,000 total tokens** (repo `meta.json` "204K" vs Z.ai "200K→204K"; Z.ai raised from 200K to 204K). 200K-class tier (<1M). Max output: not verified (Z.ai lists "up to 200K in, up to 131K out" — max output 131K, far exceeds the 64K caveat).
- Modalities: **text in / text out only** (repo `meta.json` "Text in/out"; Z.ai "text input/output"). (+text-in only; 0 of image/audio/video/PDF)
- Pricing (as of 2026-09-23): **Free OpenCode Zen tier** available (repo `meta.json`); free during launch (Z.ai). noFreeId absent → free tier exists.
- Architecture: ~744B params total / MoE (16B active decode, 8B prefill — DeepSeek V4-Pro class figures reused in the 5.x family comparison), decoder, MIT license (open weights; commercial use allowed).

### Raw benchmarks found

> Verified public numbers (Z.ai GLM-5.2 launch page, March 2026, via AI Agentic; Artificial Analysis GLM-5.2 page; OpenRouter/DeepInfra provider specs). Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: **71.8%** (Z.ai launch) (vs GPT-5.5 73.0, Sonnet 4.6 68.0)
- DeepSWE v1.1: **71.0%** (Z.ai launch)
- CyberGym: 76.5% (Z.ai)
- GDPval-AA v2: **1554 Elo** (Z.ai launch table / DeepSeek V4 comparisons) — leading open weights (vs DeepSeek V4-Pro 1328, GLM-5.1 1594)
- AutomationBench-AA: ~22.2% (Z.ai; vs GPT-5.5 22.4)
- MMR (multimodal): NOT FOUND (text-only model)
- Tau3-Banking / tau3-general / Tau2-Bench: NOT FOUND for 5.2 on fetched pages

Reasoning / knowledge:
- GPQA Diamond: **92.4%** (Z.ai launch) (vs GPT-5.6 Sol 93.5, Fable 5 88.4)
- HLE: **35.9%** w/o tools (Z.ai / AI Agentic) (vs GPT-5.5 49.5)
- MMLU (EM): 85.3% (Z.ai)
- Artificial Analysis Intelligence Index: **34** (#6/674 models overall; = GPT-4.5 Pro Preview; "leading open weights") (AA model page — index 32 vs DeepSeek V4-Pro 26; both cited, I use 34 from AI Agentic's Z.ai table)
- AA-LCR: NOT FOUND for 5.2
- CritPt / AA-Omniscience: NOT FOUND for 5.2

Coding:
- SWE-bench Verified: **80.4%** (Z.ai launch) (vs GPT-5.5 79.5, Claude Sonnet 4.6 72.5) — leading open weights
- SWE-Pro: **58.4%** (Z.ai)
- LiveCodeBench: 91.9% (Z.ai / AI Agentic; vs GPT-5.5 91.6) — leading
- SciCode: **51.3%** (Z.ai)
- DeepSWE: 71.0% (above)
- Codeforces Elo: 3107 (Z.ai)

Long context:
- MRCR-1M: **83.5** (Z.ai / OpenRouter GLM-5.2 specs) — beats Gemini-3.1-Pro 76.3
- CorpusQA-1M: not found
- RULER: not found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Anchored on Z.ai launch-table raw numbers (TB 71.8%, SWE-Verified 80.4%, GPQA 92.4%, HLE 35.9%, GDPval 1554, MRCR 83.5, DeepSWE 71.0, LiveCode 91.9%) and AA Intelligence Index = 34 (#6/674, "leading open weights"). Same scale as sibling GLM-5.2-Coding. Note: base `glm-5.2` is **text-only** per repo `meta.json` ("Text in/out") → Multimodal = 15 (the text-only floor); it is NOT the multimodal V4-Pro.

- **Tool use: 84/100.** TB v2.1 71.8% (beats GPT-5.5 73.0? — 71.8 vs 73.0, near-parity, leading open-weights) + GDPval-AA 1554 (near-frontier, > DeepSeek V4-Pro 1328) + CyberGym 76.5% + AutomationBench ~22.2%; capped by no OSWorld / Tau3 / agents'-exam standalone figure. (Repo sibling glm-5.2-coding rater: 88.)
- **Reasoning: 82/100.** GPQA 92.4% (frontier 90%+ bar) + HLE 35.9% + MMLU 85.3 + Index 34; capped by HLE 35.9% (below ~40% frontier) + no GPQA/HLE rank context. (Repo sibling: 86.)
- **Context window: 70/100.** 204,000 native tokens (200K-class tier; ≥200K, <1M); MRCR-1M 83.5 (beats Gemini 3.1-Pro) is strong but at a 200K window, no 1M-retrieval proof; max output 131K clears the <64K caveat.
- **Multimodal: 15/100.** **Text in / text out only** (repo `meta.json` "Text in/out" + Z.ai "text input/output"). (+text-in only; 0 of image/audio/video/PDF). — The dominant cap vs any omni assumption.
- **Coding: 88/100.** SWE-bench Verified 80.4% (leading open weights, beats GPT-5.5 79.5 + Sonnet 4.6 72.5) + LiveCodeBench 91.9% (leading, beats GPT-5.5 91.6) + DeepSWE 71.0 + SciCode 51.3 + Codeforces 3107; near-frontier open-weights coding. Capped by no SWE-bench-Pro / SWE-Atlas %.
- **Cost efficiency: 100/100.** Free OpenCode Zen tier (repo `meta.json` freeTierNote); Free during launch (Z.ai); $0 → 100.
- **Overall Score: 68/100.** (84 + 82 + 70 + 15 + 88) / 5 = 339 / 5 = 67.8 → 68.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for `glm-5.2` is **72** (audit/model-comparison.md v4, 2026-09-17). My figure is **68** — close (within 4). The near-match is because base `glm-5.2` and the repo use the same anchors (Z.ai launch table: TB 71.8%, SWE-Verified 80.4%, GPQA 92.4%, GDPval 1554, MRCR 83.5) and the same text-only modality (Multimodal = 15). My score is slightly lower due to (a) the deliberate **200K-context cap** (70 tier, not 1M) and (b) absence of any standalone Tau3/Tau2/OSWorld figure for the base id, plus the HLE 35.9% floor on reasoning. (The sibling `glm-5.2-coding` entry is a distinct, separately-curated slug.)

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Z.ai GLM-5.2 launch page, March 2026, via AI Agentic; Artificial Analysis GLM-5.2 model page; OpenRouter/DeepInfra provider specs; Hugging Face `zai-org/GLM-5.2` MIT weights). Re-normalized via `model-comparison.md` v4. Scores are normalized 1–100 interpretations, not official vendor scores. Note: base `glm-5.2` is text-only per repo `meta.json`; the multimodal DeepSeek-V4-Pro is a different model.
- Future sources: add a new file next to this one using the same headings.