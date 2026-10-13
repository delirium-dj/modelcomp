# GPT-5.3-Codex — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.3-codex`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model at its 2026-02-05 release — state-of-the-art on SWE-Bench Pro and Terminal-Bench 2.0, "first model that was instrumental in creating itself", first model classified High cyber capability. Second pass adds the full independent ladder: its **Agents & tools category (80) is its best** and terminal-agent ranks are elite (#6 on the public TB board and METR), while independent SWE-bench Verified harnesses read **74.8-78% vs the official 85%**. Still served (OpenRouter comparison live 2026-10-05; OpenAI community guidance, 2026-04: "a coding model… I would not use it for much else. Also a bit cheaper" than GPT-5.4).
- **Provider / access:** Codex app/CLI/IDE/web with paid ChatGPT plans; OpenAI Responses API; Azure. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.3-codex`); OpenRouter (OpenAI 91 tok/s, Azure 59 tok/s).
- **Release / knowledge:** released 2026-02-05 (confirmed). Knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex`; Zen `opencode/gpt-5.3-codex`. No Free ID on Zen.
- **Context window:** 400K tokens (confirmed by BenchLeader + both provider rows).
- **Modalities:** text and image input, text output; reasoning (xhigh is its best config); tool calls; interactive steering while working.
- **Pricing (as of 2026-10-12):** $1.75 / $14.00 per MTok in/out (Zen cached read $0.175; blended $4.81/M, "among the most expensive ranked"). No free tier.
- **Architecture:** proprietary, size undisclosed; co-designed for GB200 NVL72; first model directly trained to identify software vulnerabilities; Trusted Access for Cyber safeguards (elevated-risk requests route to GPT-5.2).

### Raw benchmarks found

> Second pass adds the BenchLeader effort ladder (best = xhigh **63.9 #56/760**, trend 59→65→70 rising, last measured 2026-09-29). Category scores (xhigh): **Agents & tools 80 (best)**, IF 73, Knowledge 67, Long context 67, Reasoning 69, Composite 66, Multimodal 62, **Coding 61 (worst)** — the "coding specialist" scores worst on the cross-model coding category precisely because newer generalists surpass it.

Agent / tool use:

- **Terminal-Bench public board: 78.4% #6** — elite (confirms the official 77.3% TB 2.0); **TB 2.0 (Vals): 64.0% #6** (harness gap vs official, same elite rank); **TB Hard (AA): 53.0% #17** (elite)
- **METR Time Horizons: 74.5% #6** — elite long-horizon autonomy
- τ²-Bench (AA): 86.0% #92 (confirmed); Vending-Bench 2: 5940.1 #20 (decent); **HiL-Bench: 4.3% #17** (weak); GDPval 70.9% wins-or-ties (official, retained); OSWorld-Verified 64.7→74.0% (official, retained); Cybersecurity CTF 77.6% internal; Gert Labs 57.47%; JobBench 33.7%; Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond (AA): **91.5% #46** (clears the frontier bar); HLE (AA): **42.5% #61** (above the 40% reference); CritPt **16.9% #77** (weak)
- **Honesty is the known collapse: AA-Omniscience non-hallucination 10.8% #392** (accuracy 52.9% #50, index 10.9 #88) — confirms the 89.2% hallucination rate
- AA Intelligence Index 32.5 #104 (mid-weak); **Epoch Capabilities Index 156.8 #18** (elite composite); AA-LCR 83.3% #19; IFBench 75.4% #33

Coding:

- **SWE-bench Verified three-way spread: official 85% vs Epoch 74.8% #15 vs Vals 78.0% #33** — the independent cluster sits 7-10 points under the system card
- **Terminal-Bench 2.0: official 77.3% vs Vals 64.0% #6** — harness gap, elite rank either way
- SWE-Bench Pro 56.8% (official, then-SOTA); SWE-Lancer IC Diamond 81.4% (official); LiveCodeBench (Vals) **87.3% #15**; **WeirdML 77.9% #22 / 79.3% #19**; **IOI 53.8% #19**; **ALE-Bench 1655.2 #12**; Vibe Code v1.1 61.8% #41 (confirmed); SWE-Rebench 58.2%; LMArena WebDev 1409 #80 (weak preference — the arena never loved it)
- DeepSWE / SciCode: still no verified public score (unchanged)

Long context:

- 400K window confirmed; **AA-LCR 83.3% #19** — good measured retrieval (fills the first pass's "no retrieval data" gap); no MRCR/RULER rows.

Multimodal:

- MMMU-Pro (AA) 78.5% #69; category 62; vision drives OSWorld, text+image in only. (The first-pass Design Arena 1170 row retained.)

### Normalized scores (1–100)

- **Tool use: 84/100.** Lowered from 85: the independent terminal rows are elite (TB public #6, TB 2.0 Vals #6, TB Hard #17, METR #6, τ² 86%) with Agents & tools 80 as its best category — offset by HiL-Bench 4.3%, Gert 57.5%, JobBench 33.7%.
- **Reasoning: 71/100.** Lowered from 72: GPQA 91.5% #46 and HLE 42.5% #61 clear the bars, but CritPt 16.9% #77, the catastrophic honesty (non-hallucination 10.8% #392), and AA II 32.5 #104 stay the caps — ECI 156.8 #18 is the lone elite general composite.
- **Context window: 78/100.** Raised from 74: 400K confirmed and the retrieval gap is now filled — AA-LCR 83.3% #19 is genuinely good measured long-context reasoning.
- **Multimodal: 68/100.** Held: MMMU-Pro 78.5% #69, category 62 — image-in to drive computer use, nothing more.
- **Cost efficiency: 63/100.** Held: $1.75/$14 with $4.81/M blended ("among the most expensive"); $0.161 per agentic session; the community's "a bit cheaper than 5.4" is the only value angle.
- **Coding: 82/100.** Lowered from 88: the official 85% SWE-bench Verified did not survive independent measurement (Epoch 74.8% #15, Vals 78.0% #33) and TB 2.0 reads 64.0% on the Vals harness — but LCB 87.3% #15, WeirdML #19-22, IOI #19, ALE #12, SWE-Pro 56.8% (then-SOTA) and the elite terminal-agent profile keep it a top coding workhorse, just not the 88 the system card implied.
- **Overall Score: 77/100.** Half-up mean of the five quality dims: (84 + 71 + 78 + 68 + 82) / 5 = 76.6 → 77, unchanged. The Feb-2026 coding-agent specialist: still a top-6 terminal/SWE agent with elite long-horizon autonomy (METR #6), now folded into the GPT-5.4 line for general work; never trust its factual claims unverified (non-hall #392).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader effort-ladder as of 2026-09-29 aggregating Terminal-Bench public board, METR, Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL HiL-Bench, Andon Labs, WeirdML; OpenRouter provider rows; DDG-lite searches surfacing the OpenAI community thread and OpenRouter/OpenAI comparison pages confirming it remains served as the cheaper coding specialist); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
