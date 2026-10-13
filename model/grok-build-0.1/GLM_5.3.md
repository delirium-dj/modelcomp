# Grok Build 0.1 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-build-0.1`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (aliases: `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`)
- **Short description:** xAI's fast coding model trained specifically for agentic software-engineering workflows — released **2026-05-29** per BenchLeader (the registry snapshot was 05-20; both flagged), default model of the Grok Build coding agent; the alias chain confirmed by this cycle's promptfoo evidence (**`grok-code-fast-1` requests route to `grok-build-.1`**). Second pass fills the empty dossier with a settled profile (best **53.5 #270/761**, last measured 2026-06-25) that cuts both ways: **GPQA 89.5% #73 and HLE 38.3% #97 — both near-bar, strong gap-fills** — against **τ³ 13.4% #123, GDPval 28.3% #141, Vibe Code 13.3% #80, Agents & tools 41 (worst category), and catastrophic honesty (non-hallucination 6.9% #483)**. Top use case: latency-sensitive agentic coding loops — with retrieval attached for anything factual.
- **Provider / access:** xAI API (`grok-build-0.1`; us-east-1 / us-west-2; 37 req/s, 10M tokens/min; no Batch API); OpenCode Zen `opencode/grok-build-0.1` (Responses API); one SpaceXAI OpenRouter row ($1.00/$2.00, 82 tok/s).
- **Release / knowledge:** **2026-05-29** (BenchLeader) / 2026-05-20 (registry snapshot — flagged); knowledge cutoff not disclosed.
- **IDs:** `grok-build-0.1` (xAI, Zen); aliases above (routing confirmed); free promo routes reported at $0 by one tracker — not a standing free tier.
- **Context window:** **256K tokens** (confirmed; ≥200K prompts bill the whole request at the higher rate).
- **Modalities:** text, image, and PDF input; text output; function calling, structured outputs, reasoning (official docs); JSON mode.
- **Pricing (as of 2026-10-13):** per 1M — < 200K prompt: **$1.00 in / $0.20 cached / $2.00 out**; ≥ 200K: $2.00 / $0.40 / $4.00 (confirmed; blended $1.25/M); 66 tok/s, 32 s first answer; $0.068 per agentic session.
- **Architecture:** proprietary; parameter count and license undisclosed; purpose-built fast-serving coding model.

### Raw benchmarks found

> Second pass adds the settled BenchLeader profile (best **53.5 #270/761**, ±7.9, last measured 2026-06-25 — thin, release-era data). Category scores: **Knowledge 64 (best)**, Long context 62, Multimodal 60, Reasoning 56, Coding 55, **Agents & tools 41 (worst)**, Composite 44.

Agent / tool use:

- **τ³-Banking: 13.4% #123** (dreadful — gap filled); **GDPval-AA: 28.3% #141** (weak — gap filled); **GBAEval: 2.4% #15** (dreadful); LiveBench Agentic Coding 45.8% #52
- Terminal-Bench 2.1 (AA): **52.1% #110** — the one mid agent row; TB 2.x / τ² / Claw-Eval / Toolathlon / MCP-Atlas: still unmeasured
- Function calling, structured outputs, and reasoning verified at the API level; default model of the Grok Build agent (retained)

Reasoning / knowledge:

- **GPQA Diamond (AA): 89.5% #73** — near-bar (gap filled); **HLE (AA): 38.3% #97** — just under the 40% reference (gap filled, strong for the class); **CritPt: 9.1% #120** (weak)
- LiveBench: Reasoning 76.4% #59, Mathematics 78.4% #64, Data Analysis 70.8% #48, Language 72.5% #57, IF 65.2% #44, global 67.8% #60
- **Honesty catastrophic: AA-Omniscience non-hallucination 6.9% #483** — accuracy 51.5% #55 is decent, so it knows but hallucinates; Omniscience 6.4 #98
- **AA II 27.2 #139**; **MMMU-Pro (AA): 76.5% #83**; **AA-LCR: 74.7% #154** (good)

Coding:

- SWE-bench Verified: **70.8%** (GenAIList, rank 32/56 — retained, unchanged); SciCode **50.2% #96** (just below the 55% reference); LiveBench Coding 65.4% #67; **Vibe Code v1.1: 13.3% #80** (dreadful — gap filled; the open-ended floor)
- LiveCodeBench / DeepSWE: still no verified public score (unchanged)

Long context:

- 256K confirmed; **AA-LCR 74.7% #154** — good measured retrieval; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro (AA) 76.5% #83 — decent; text+image+PDF in, text out (the image+PDF band).

### Normalized scores (1–100)

- **Tool use: 46/100.** Lowered from 70: the API-level agentic engineering is verified, but the measured rows landed at the floor — τ³ 13.4% #123, GDPval 28.3% #141, GBAEval 2.4%, Vibe 13.3%, Agents-41-worst — with TB 2.1 52.1% #110 the lone mid read.
- **Reasoning: 66/100.** Raised from 55: the gap-fills are strong — GPQA 89.5% #73 near-bar, HLE 38.3% #97 near-bar, LiveBench Reasoning 76.4% #59, AA II 27.2 #139 — capped by CritPt 9.1% and the catastrophic honesty (6.9% non-hall #483).
- **Context window: 74/100.** Raised from 72: 256K confirmed with good measured retrieval (AA-LCR 74.7% #154); the ≥200K billing threshold stands.
- **Multimodal: 72/100.** Lowered from 75: MMMU-Pro 76.5% #83 is decent; text+image+PDF in, text out — no video/audio.
- **Coding: 62/100.** Lowered from 78: the retained SWE-V 70.8% and TB 2.1 52.1% hold mid-upper — but SciCode 50.2% below the reference, **Vibe 13.3% #80** (the purpose-built coding agent measures at the open-ended floor), and no LCB/DeepSWE rows cap it.
- **Cost efficiency: 90/100.** Held: $1.00/$2.00 with $0.20 cached reads, $0.068/session, 82 tok/s available — still half Grok 4.7's price; the ≥200K doubling remains the caveat.
- **Overall Score: 64/100.** (46 + 66 + 74 + 72 + 62) / 5 = 64.0, down from 70. Best-fit: the budget agentic-coding workhorse of the Grok line — near-bar GPQA/HLE (surprisingly strong for the tier) and good long-context retrieval at half Grok 4.7's price — but its purpose-built coding story measured at the Vibe/τ³ floors, its honesty is catastrophic (non-hall 6.9% — never trust its factual claims unverified), and the release-era-only measurement record (last measured June) means the profile is thin in both directions; prefer Grok 4.7 for capability-critical work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (the settled BenchLeader profile as of 2026-06-25 aggregating Artificial Analysis incl. the `-06-16` build variant rows — GPQA/HLE/CritPt/TB 2.1/τ³/GDPval/Omniscience/MMMU-Pro/AA-LCR — plus LiveBench and Epoch AI Benchmarking Hub incl. GBAEval; one SpaceXAI provider row confirming pricing and speed; the grok-code-fast-1 → grok-build-.1 alias routing per the promptfoo provider doc verified during this cycle's earlier passes; the first-pass GenAIList SWE-V row and API-level capability verification retained); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
