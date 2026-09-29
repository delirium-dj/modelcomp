# Gemini 3.1 Pro — findings by Grok 4.6

- Source: Google DeepMind / Gemini 3.1 Pro Preview
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google DeepMind’s February 2026 Pro-class Gemini, positioned for deep reasoning, agentic coding, and long-context multimodal work. Distinct from Gemini 3 Pro (prior) and the later 3.5/3.8 Flash lines.
- **Provider / access:** Gemini API / Google AI Studio / Vertex (`gemini-3.1-pro-preview`; agentic-custom-tools sibling `gemini-3.1-pro-preview-customtools`). GenerateContent-style Gemini API (not OpenAI Chat Completions). Also Gemini App, AI Mode, Antigravity.
- **Release / knowledge:** Preview published 2026-02-19; docs last-updated February 2026. Knowledge cutoff not disclosed on the public model page.
- **IDs:** `google/gemini-3.1-pro-preview` (Gemini API `gemini-3.1-pro-preview`). No OpenCode Zen Free ID found.
- **Context window:** 1,048,576 input / 65,536 output tokens — Google AI for Developers model table (https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview). DeepMind card: 1M in / 64k out.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking, function calling, structured output, code execution, search grounding, caching. No native image/audio generation or Live API on this ID.
- **Pricing (as of 2026-09-29):** Standard API ≤200K prompt: $2.00 in / $12.00 out / $0.20 cached per 1M tokens; >200K: $4.00 / $18.00 / $0.40 (ai.google.dev rates mirrored on aireleasetracker, verified Aug 2026). Flex ~$1/$6; priority ~$3.60/$21.60 (OpenRouter aggregator, checked 2026-09-29). Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google DeepMind Gemini 3.1 Pro Thinking High, Terminus-2 harness — https://deepmind.google/models/gemini/pro/)
- Terminal-Bench 2.1: **70.3%** (aireleasetracker compilation of published scores — https://aireleasetracker.com/model/google/gemini-3.1-pro)
- τ2-bench Retail / Telecom: **90.8% / 99.3%** (DeepMind table)
- Tau3-Banking / Tau3: **no verified public score found**
- GDPval-AA: **1317 Elo** (DeepMind); tracker lists GDPval-AA **1314** and GDPval-AA v2 **965**
- MCP Atlas: **69.2%** (DeepMind official); tracker lists **78.2%** — using official 69.2%
- Toolathlon: **48.8%** (tracker)
- BrowseComp (search + Python + browse): **85.9%** (DeepMind)
- OSWorld-Verified: **76.2%** (tracker)
- APEX-Agents: **33.5%** (DeepMind)
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **94.3%** (DeepMind)
- HLE (full set, text + MM, no tools / search+code): **44.4% / 51.4%** (DeepMind)
- ARC-AGI-2 (ARC Prize verified): **77.1%** (DeepMind)
- FrontierMath T1–3 / T4: **36.9% / 16.7%** (tracker)
- Artificial Analysis Intelligence Index v4.3.2: **30** (https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
- CritPt / LCR / MLCR as named benches: **no verified public score found** (AA Index v4.3.2 *includes* CritPt and AA-LCR, but per-bench splits were not published on the AA snippet)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMLU: **92.6%** (DeepMind)

Coding:

- SWE-bench Verified (single attempt): **80.6%** (DeepMind)
- SWE-Bench Pro (public, single attempt): **54.2%** (DeepMind)
- LiveCodeBench Pro: **2887 Elo** (DeepMind)
- SciCode: **59%** (DeepMind)
- DeepSWE 1.1: **12%** (AA independent; tracker)
- Vibe Code Bench: **no verified public score found**
- MLE-Bench: **42.6%** (tracker)
- Next.js Evals: **58%** (tracker; DeepMind-era “75%” not used — later tracker figure)

Long context:

- MRCR v2 8-needle 128k average: **84.9%**; 1M pointwise: **26.3%** (DeepMind). Retrieval at full 1M is far below the 98%-at-512K+ bar.

Multimodal:

- MMMU-Pro (no tools): **80.5%** (DeepMind)
- CharXiv Reasoning: **83.3%** (tracker)
- VideoMMMU/VideoMME **87.2%** cited on third-party tables (aimodelsnavi); treat as secondary vs DeepMind’s published set

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.0 68.5% and TB 2.1 70.3% sit above the mid band but well short of ~88%+ frontier; τ2 Retail/Telecom is near-ceiling; BrowseComp 85.9% and OSWorld 76.2% are strong. Caps: GDPval-AA ~1317 (not ~1750+), MCP Atlas 69.2% official, Toolathlon 48.8%, no Claw-Eval, no Tau3.
- **Reasoning: 93/100.** GPQA Diamond 94.3% and HLE 44.4% (no tools) match the frontier reference; ARC-AGI-2 77.1% is a large lift vs Gemini 3 Pro. Caps: AA Intelligence Index 30 (newer composite, not the old 60+ scale), FrontierMath not at the top of later 2026 boards.
- **Context window: 96/100.** Native ~1.05M input maps to the ≥1M tier (95–100). Not 100: MRCR v2 1M pointwise is only 26.3%, and 128k average 84.9% is not ≥98% retrieval at 512K+. Max output 64k is a caveat, not a separate dim.
- **Multimodal: 92/100.** Image + video + audio + PDF in with text out hits the “audio in” 90–100 band. Caps: text-only output (no image/audio generation); MMMU-Pro 80.5% is excellent but not a perfect-coverage claim.
- **Coding: 82/100.** SWE-Verified 80.6% and SciCode 59% are frontier-adjacent; LiveCodeBench Pro 2887 Elo led the DeepMind comparison table. Caps: DeepSWE 1.1 12% (far below 74%+ refs), SWE-Pro 54.2%, TB still mid-60s/low-70s vs 85%+ agent-coding refs.
- **Cost efficiency: 74/100.** Paid $2/$12 (≤200K) is cheaper than Opus-class $15/$75 but dearer than ~$0.60/$2.20 or $1.25/$4.25 Pareto refs; >200K doubles input. Cached $0.20 and flex $1/$6 help. No $0 Zen Free ID.
- **Overall Score: 89/100.** Mean of 84, 93, 96, 92, 82 = 89.4 → 89 half-up. Best-fit: default long-context multimodal Pro when you want GPQA/ARC-class reasoning and 1M ingest without Opus list prices; pair with a stronger DeepSWE/TB specialist for terminal-heavy agents.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-29
- Method: Public internet research (DeepMind model page, Gemini API docs, Artificial Analysis, aireleasetracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
