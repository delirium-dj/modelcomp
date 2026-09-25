# Grok 4.7 — findings by DeepSeek 4.1 Flash

- Source: xAI (branded "SpaceXAI" on launch materials) / Grok 4.7 (`x-ai/grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (no "Free"-tier wording; paid only)
- **Short description:** xAI's flagship successor to Grok 4.6 (released 2026-09-21) — a larger base model trained with a longer RL run on multi-hour tasks, tuned on anonymized Cursor workflow data, and shipped as the default model behind Cursor and Grok Build. Frontier-adjacent rather than frontier-topping: strongest on engineering-domain reasoning and self-verifying coding, weakest on ultra-long-horizon work and speed.
- **Provider / access:** xAI's own API (Chat Completions plus the stateful Responses API), OpenRouter `x-ai/grok-4.7`, Google Cloud Vertex AI, Microsoft Azure AI Foundry, plus hosted surfaces (Cursor, Grok Build, Office add-ins). A **Grok 4.7 Fast** variant (2× price for 2× output speed) exists only inside Cursor and Grok Build.
- **Release / knowledge:** released 2026-09-21; knowledge cutoff not disclosed. Predecessor Grok 4.6 (2026-08-12) carried a Feb 2026 cutoff.
- **IDs:** `x-ai/grok-4.7` (OpenRouter) / `grok-4.7` on xAI's API; `grok-4.7-fast` for the Cursor/Grok Build variant. No OpenCode Zen Free ID and no free tier — cost is scored on paid pricing.
- **Context window:** 500,000 tokens as a shared input+output budget (up to ~450,000 max output per tracker). Requests above 200,000 tokens of context are billed at double rate on the standard API.
- **Modalities:** text and image input; text output; reasoning yes (efforts low → xhigh); tool calls; JSON mode; always returns encrypted reasoning content. No audio/video input, no media output, no Batch API.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input and $6.00 / 1M output on xAI's standard API, cached input $0.50 / 1M (same rate as Grok 4.6); OpenRouter lists $1.60 / $4.80. >200K-token requests and the Fast variant cost 2×. Independent testing puts the real cost per completed task near **$3.74** because the model is verbose.
- **Architecture:** proprietary sparse Mixture-of-Experts (MoE with multi-head latent attention per the ARMES model page); parameter count and weights undisclosed.

### Raw benchmarks found

> Sources: xAI launch/release material as relayed by HokAI and Emergent, the ARMES
> model documentation page, modelgrep's Artificial Analysis-sourced rows, and
> BenchmarkList. Harness disagreements are listed side by side.

Agent / tool use:

- Terminal-Bench 4.0: **38.0%** (ARMES model page) — xAI's own comparative material has it trailing Claude Fable 5.1 "by a wide margin" on Terminal-Bench; no Terminal-Bench 2.1 number found
- GDPval: **1,695 Elo**; AA-Briefcase v1.1: **1,657 Elo** (agentic knowledge-work evals, ARMES)
- AA Coding Agent Index (1.5): **56.3** (ARMES)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Harvey Legal Agent: **19.6%**; MASK-Rectified: **0.00%**; Sycophancy rate: **0.03%**; jailbreak compliance **0.01%** with 100% bio / 99.9% chem CBRN refusal recall (vendor model card via HokAI)
- AI BENCHY leaderboard: Grok 4.7 not listed in the 2026-09-24 snapshot checked

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.4** (v4.3.2) — modelgrep ranks this 9th of 181 tracked models (97th percentile); Emergent reports AA placing it #16 of 202 with the frontier at 53 (Fable 5.1, GPT-6 Astra)
- HLE: **43%** (modelgrep, above the 40%+ frontier reference)
- GPQA Diamond: **69.4%** (ARMES) — flagged: the same page lists 94.9% for Grok 4.6, so this reading is likely a harness/config mismatch; treat as low confidence and do not average it with other sources
- MATH-500: **87.1%**; HealthBench Pro: **56.7%**; EEBench: **64.0%** (ARMES) / **66.0%** (HokAI) — xAI's material claims a lead on EEBench
- SciCode: **57%** (modelgrep, Artificial Analysis harness)
- LCR / AA-LCR / CritPt / Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **71.0%** (high effort) — ahead of Grok 4.6's 65.2%, behind GPT-5.6 Sol's 72.7%
- CursorBench 4.0: **46.3%** at xhigh / **43.9%** at high (long-horizon tasks from real Cursor sessions; Claude Fable 5.1 leads at 51.8%, GPT-5.6 Sol sits at 41.7%)
- SWE-bench Verified: **58.6%** (ARMES) — flagged: the same page reports 95.6% for Grok 4.6 on a "Vals" harness, so cross-source comparability is poor
- LiveCodeBench: **54.2%**; SWE-Marathon v1.1: **46.0%**; FrontierSWE V2: **29.0%** at xhigh mean@5 (vs Fable 5.1's 56.3%); CADGenBench: **44.4%**
- SWE-bench Pro / Vibe Code Bench / Coding Index: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks / AA-LCR value found. The 500K budget is a listing; reviewers note requests beyond 200K tokens are double-billed and that long-context retrieval past 200K "requires structured needle-in-haystack prompt framing" (ARMES), while ultra-long-horizon coding collapses (FrontierSWE V2 29.0%, SWE-Marathon 46.0%).

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1,695 Elo and AA-Briefcase 1,657 Elo sit just under the ~1,750 frontier reference, AA's Coding Agent Index 56.3 and Terminal-Bench 4.0 38.0% put it in the top decile of agentic ability, and it is the default agent model inside Cursor and Grok Build. Capped by Terminal-Bench still trailing Fable 5.1 and the total absence of Tau3-Banking/Tau2 numbers.
- **Reasoning: 88/100.** AA Intelligence Index 46.4 (top-10 of 181, 97th percentile) with HLE 43% clears the frontier HLE bar, and MATH-500 87.1% plus EEBench 64–66% support it. Capped by the disputed GPQA Diamond 69.4% reading and no CritPt/AA-LCR/omniscience data.
- **Context window: 88/100.** A 500K shared window lands in the 500K–1M band (85–94) with a ~450K output ceiling; nothing reaches the ≥1M tier, >200K requests double-bill, and the long-horizon results show the window is not uniformly usable.
- **Multimodal: 65/100.** Text and image in, text out only — the +image-in band (60–70); no audio or video input, no media generation.
- **Coding: 88/100.** DeepSWE v1.1 71.0% sits just under the 74%+ frontier marker, SciCode 57% and CursorBench 46.3% are strong, and the model self-verifies over long sessions. Capped by SWE-bench Verified 58.6%, LiveCodeBench 54.2%, FrontierSWE V2 29.0% and verbosity (~$3.74 per completed task).
- **Cost efficiency: 70/100.** $2.00/$6.00 per 1M ($3.00 blended at 3:1) is mid-market on the methodology's scale — well above the ~$1.25/$4.25 ≈ 88 point, far above the $0.60/$2.20 ≈ 92 point; >200K context and the Fast variant both cost 2×.
- **Overall Score: 83/100.** (88 + 88 + 88 + 65 + 88) / 5 = 83.4 → **83**. Best fit: Cursor/Grok Build-style agentic coding and engineering-domain reasoning where a mid-tier price and first-party integration matter more than leaderboard wins.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-25 UTC
- Method: public internet research across xAI launch material as relayed by HokAI and Emergent.sh, the ARMES model documentation page, modelgrep's Artificial Analysis-derived rows, and BenchmarkList; conflicting harness readings are listed rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
