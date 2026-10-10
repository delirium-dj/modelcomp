# GPT-6 Astra — findings by Step 5 Preview

- Source: OpenAI `gpt-6-astra`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (`gpt-6-astra`; API model ID `gpt-6-astra`, effort variants `-low/-medium/-high/-xhigh/-max`, `gpt-6-astra-pro`)
- **Short description:** OpenAI's flagship reasoning model (above GPT-5.6 Sol / the Sol-Terra-Luna family), built for the hardest end-to-end work — agentic coding, computer use, authorized cybersecurity research. First OpenAI model rated Critical on the Preparedness Framework's cybersecurity threshold.
- **Provider / access:** OpenAI API, ChatGPT plans, Codex; also AWS Bedrock + Azure. Fine-tuning not supported. No free tier (tier-1 rate limits only).
- **Release / knowledge:** Released 2026-09-03 (staged rollout; llm-stats logs 2026-09-04). Knowledge cutoff April 2026.
- **IDs:** `gpt-6-astra` (+ effort suffixes). No free/contributor ID.
- **Context window:** 1,050,000 (1.05M) input; 128,000 max output. Separate pricing tier above a fixed token threshold.
- **Modalities:** Text, image in; text out. No audio/video input; no image output. Reasoning yes; tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $10.00/M in · $1.00/M cached in · $50.00/M out (Standard). Above the threshold: 2× input / 1.5× output. Batch/Flex half; Fast double; Ultrafast $60/$300 (up to 6× faster). No free tier.
- **Architecture:** Proprietary; architecture and parameter count undisclosed (trained at the Stargate site in Texas).

### Raw benchmarks found

> Cross-referenced hokai.io (Artificial Analysis + OpenAI), vectorwire.ai (176 results/63 benchmarks, 43 independent, capability profile), and llm-stats. Independent runs noted where available.

Agent / tool use:

- Artificial Analysis Intelligence Index: **53** (max effort; hokai — below Claude Opus 5.5 and Fable 5.1, $3.26/index task, 51 tok/s)
- ExploitBench (cybersecurity): leads GPT-5.6 Sol (OpenAI's clearest edge)
- Vals Index: **63.1%** (vectorwire cross-ref)
- Terminal-Bench-Science 0.1: **64.6%** (vectorwire cross-ref)
- ScreenSpot-Pro (computer use): leads GPT-5.6 Sol
- Vector Wire capability: **Agentic "Capable"** (−11.1% vs leader, 5/7); **Instruction Following "Limited"** (−30.4%)
- Terminal-Bench 2.1 (Vals AI Terminus-2): **87.3%** (max, independent — reported 2026-09-28) — strong agentic-terminal result
- SWE Atlas Codebase QnA: **59.1%** (Scale AI Codex harness, independent) / **47.8%** (Mercor mini-swe-agent, independent) — real codebase navigation
- SWE Atlas Refactoring: **59.1%** (Scale AI Codex, independent)
- BenchCAD Vision2Code: **95.9%** (OpenAI, with tools)
- AutomationBench 1.0.6: **41.4%** (max, OpenAI self-reported) / **25.3–30.3%** (independent Zapier lower-effort runs)
- BrowseComp 130-q: **94.2%** (Mercor web-research agent, xHigh, independent)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; hokai rank #2/50) — near-ceiling
- Vector Wire capability: **Reasoning "Frontier"** (leads 6/6); **Factuality "Frontier"** (leads 3/4); **Math "Frontier"** (−1.5%)
- Artificial Analysis Intelligence Index: **53** (max effort)
- Humanity's Last Exam: trails a leading rival on the broad open-ended knowledge exam (per hokai) — exact value not surfaced live
- AIME 2025: no verified public score found for Astra (OpenAI skipped several standard launch benchmarks)
- ARC-AGI: headline holds only in a persistent test configuration with cross-call memory, NOT in single-shot API (per hokai "Quirks")

Coding:

- Vector Wire capability: **Coding "Capable"** (−20.9% vs leader, 5/10)
- GPQA Diamond 96.0% is strong, but OpenAI skipped SWE-bench Verified / SWE-bench Pro / LiveCodeBench at launch — a notable flagship gap
- Terminal-Bench / ScreenSpot-Pro lead GPT-5.6 Sol on agentic terminal + computer use
- SWE-bench Verified / SWE-bench Pro: **no verified public score found** for Astra (not published at launch)
- ExploitBench / cybersecurity coding: leads GPT-5.6 Sol

Long context:

- 1.05M input / 128K output; long-context recall "stays strong deep into the window on OpenAI's own retrieval test" (hokai)
- Vector Wire: Long Context **"Strong"** (−10.0% vs leader)

Multimodal:

- Text + image in; text out. No audio/video, no image output.
- **Tool use: 82/100.** AA Intelligence Index 53, independent Terminal-Bench 2.1 87.3% (Vals Terminus), BrowseComp 94.2% (Mercor), SWE Atlas 59.1% (Scale AI), and ExploitBench/ScreenSpot-Pro leads over GPT-5.6 Sol are solid. Capped by Vector Wire's Agentic "Capable" (−11.1%) and Instruction Following "Limited" (−30.4%), plus lower-effort independent AutomationBench (25–30%) — agentic breadth trails its reasoning lead.
- **Reasoning: 93/100.** GPQA Diamond 96.0% (rank #2/50) and AA Intelligence Index 53 with Vector Wire rating Reasoning/Factuality/Math all "Frontier". Capped by an HLE that trails the leading rival, no verified AIME row, and the ARC-AGI headline that only holds in a persistent-memory config (not single-shot API).
- **Context window: 90/100.** 1.05M input with strong long-context recall deep into the window and Vector Wire Long Context "Strong" (−10%). Held from the top tier by the 128K output cap and the absence of an explicit MRCR ≥98%-at-512K retrieval figure.
- **Multimodal: 72/100.** Text + image in (text out), no audio/video input and no non-text output → just into the 60–70 "+image in" band, nudged up by computer-use strength; Vector Wire rates Multimodal "Capable" (−21.9%, 1/6).
- **Coding: 82/100.** Strong on OpenAI's chosen agentic-terminal/computer-use and cybersecurity-coding evals (ExploitBench, ScreenSpot-Pro lead GPT-5.6 Sol) and GPQA 96%, but Vector Wire rates Coding "Capable" (−20.9%, 5/10) and OpenAI published NO SWE-bench Verified / SWE-bench Pro / LiveCodeBench at launch — a real flagship gap that caps the coding score.
- **Cost efficiency: 30/100.** Paid-only at $10/$50 per 1M (the most expensive tier tracked, >95% of models); cached $1/M, Batch/Flex half, but Ultrafast $60/$300. No free tier.
- **Overall Score: 84/100.** Mean of the five non-cost dims (82+93+90+72+82)/5 = 83.8. Best fit for the hardest reasoning, math, and authorized-security/computer-use work where its price is justified; the cheaper GPT-6.1 Sol is pitched as close in ability for general coding.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (61 primary-source results, updated 2026-10-07 — independent TB2.1 87.3%, BrowseComp 94.2%, SWE Atlas 59.1%, AutomationBench up to 41.4%) and the Artificial Analysis live LLM leaderboard (Intelligence Index 53, max) — no score change warranted. Prior pass (2026-10-08) used hokai.io (Artificial Analysis + OpenAI), vectorwire.ai, and llm-stats.com.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- Vector Wire: Multimodal **"Capable"** (−21.9% vs leader, 1/6)

### Normalized scores (1–100)
