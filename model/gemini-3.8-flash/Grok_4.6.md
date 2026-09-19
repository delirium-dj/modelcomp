# Gemini 3.8 Flash — findings by Grok 4.6

- Source: Google (`google/gemini-3.8-flash`; OpenCode Zen `opencode/gemini-3.8-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google’s most intelligent Flash-tier model (GA 2026-09-02), aimed at long-horizon software engineering, autonomous agents, and enterprise workflows at Flash latency. Same core family as 3.8 Flash Cyber; Cyber is a restricted Fairwind-only variant, not this listing.
- **Provider / access:** Gemini API / Google AI Studio generateContent (`gemini-3.8-flash`); Vertex `google-vertex/gemini-3.8-flash`; OpenCode Zen `opencode/gemini-3.8-flash`. Chat Completions-style gateway IDs plus native Gemini generateContent. Thinking levels: low / medium (default) / high (`minimal` errors).
- **Release / knowledge:** Released 2026-09-02 (UTC); knowledge cutoff not published on the Gemini API model page.
- **IDs:** `google/gemini-3.8-flash`; Zen `opencode/gemini-3.8-flash` (paid; no Zen Free ID found).
- **Context window:** 1,048,576 input tokens / 65,536 max output (Gemini API docs, models.dev; GitHub Copilot listing rounds to 1,000,000 / 64,000).
- **Modalities:** Text, image, video, audio, and PDF in; text out. Function calling, structured outputs, code execution, file search, search grounding, URL context, computer use (preview). No native image/audio generation; Live API not supported on this ID.
- **Pricing (as of 2026-09-19):** Google intro through 2026-12-31: **$0.75 / $3.75** per 1M in/out; standard from 2027-01-01: **$1.50 / $7.50**. OpenCode Zen lists **$1.50 / $7.50** with cache read **$0.15 / 1M**. Paid; no $0 Zen Free ID found.
- **Architecture:** Proprietary closed weights (Google DeepMind Gemini 3 Flash line). Param count not disclosed.

### Raw benchmarks found

> Vendor DeepMind card / launch (2026-09-02) vs independent Vals / Artificial Analysis / BenchmarkList. Spreads are noted; no invented fills.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card / BenchmarkList rank 2/182); **87.6%** (Artificial Analysis Terminus 2, The Model Gap); **81.3%** (Vals / BenchLM independent, ±0.38); Cloud docs also list **90.8%** (provider run — treat as unverified vs independent).
- Tau3-Banking: **45.8%** Pass@1 (Artificial Analysis / BenchmarkList, rank 9/174); Cloud docs **38.1%** on τ³-bench Banking (different harness). ComputePrices lists τ-bench Banking **44.9%**.
- GDPval-AA: **1545 Elo** (DeepMind card / BenchmarkList rank 21/340; leader cited ~1861).
- OSWorld-2.0: **59.0%** partial score, batch tool enabled (DeepMind card / BenchmarkList).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**.
- SWE Atlas Codebase QnA: **no verified public score found**; SWE-Atlas (Cloud docs) **51.9%** (provisional, provider table).

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (BenchmarkList / AA); **94.4%** (Vals independent); BenchLeader Epoch Hub **95.4%** (high effort).
- HLE: **47.8%** (AA, no tools); HLE-Verified (1,811 items): **54.9%** (Google self-reported, DeepMind card). Cloud docs HLE **45.4%**.
- LCR / MLCR: AA-LCR **82.0%** (BenchmarkList rank 3/409). MRCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **58.7** (BenchmarkList rank 8/417); IntuitionLabs cites **59** at high effort. BenchLeader Index **63.6 ±5.3** (#45/374, medium effort — different composite).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **80.0%** (Vals independent). SWE-Bench Pro: **61.6%** (Google Cloud developer guide).
- LiveCodeBench: **89.5%** (Vals / BenchLeader).
- SciCode / AA-SciCode: **54.4%** (BenchmarkList); AA SciCode **55.0–56.6%** by effort (BenchLeader).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **73.7%** (DeepMind card / BenchmarkList, high thinking); The Model Gap cites Datacurve board **74.0%**.
- Terminal-Bench 4.0: **19.1%** (DeepMind card — general agent, not SWE).

Long context:

- AA-LCR **82.0%** at the published 1M window; **no MRCR / RULER / GraphWalks score found** at 512K+ (≥98% retrieval not verified).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 90/100.** Vendor TB2.1 89.4% and Tau3-Banking 45.8% sit on the frontier refs (TB ~88%+, Tau3 ~50%+); GDPval-AA 1545 and OSWorld 59% plus independent TB 81.3% cap a 95–100. Missing Claw-Eval noted (slight penalty, no invented score).
- **Reasoning: 93/100.** GPQA Diamond 94.4–95.4% and HLE 47.8% / HLE-V 54.9% meet frontier GPQA 90%+ and HLE 40%+; AA Index 58.7 is just shy of the Index 60+ band, which caps a 96+.
- **Context window: 95/100.** 1,048,576 input maps to the ≥1M tier (95–100); 100 would require ≥98% retrieval at 512K+ which is not published (AA-LCR 82% is strong but not that bar). Max output 65,536 is a caveat, not a separate axis.
- **Multimodal: 92/100.** Image + video + audio + PDF in with text out hits the “audio in or any non-text out = 90–100” band; capped below 98 by text-only output and no Live API / native image generation on this ID.
- **Coding: 90/100.** DeepSWE 73.7–74% and SciCode ~54–56% match frontier DeepSWE 74%+ / SciCode 55%+; independent SWE-Verified 80% and LiveCodeBench 89.5% support 90. Caps: SWE-Pro 61.6%, SWE-Atlas 51.9%, and the TB independent spread.
- **Cost efficiency: 90/100.** Evaluated on Google introductory **$0.75 / $3.75** (between methodology ~$0.60/$2.20 ≈92 and ~$1.25/$4.25 ≈88). Zen **$1.50 / $7.50** would score closer to ~80–85; not $0 so not 100.
- **Overall Score: 92/100.** Mean of (90 + 93 + 95 + 92 + 90) / 5 = 92.0. Best-fit: default Flash workhorse for long-horizon coding/agents when 1M context and omni input matter; escalate to a higher GDPval/OSWorld specialist for knowledge-work Elo or desktop-agent reliability.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (Gemini API docs, Google launch post, models.dev, BenchmarkList, Artificial Analysis / Vals citations, The Model Gap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
