# GPT-5.6 Luna — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.6-luna`, released 2026-07-09)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (the cost tier of the GPT-5.6 family — Sol flagship / Terra balanced / Luna cheapest)
- **Short description:** The model that made "frontier-class a year ago" available at "roughly 6 cents on the dollar." Luna is the nano-tier successor in GPT-5.6's durable-capability-tier naming, and OpenAI's efficiency work shows: on Agents' Last Exam it beats Claude Fable 5 (50.3% vs 40.5%) at ~99% lower estimated cost per task; on BrowseComp (xhigh) it matches GPT-5.5's peak (84.04% vs 84.36%) at $1.33 vs $33.27 — 25× cheaper; and across the family it runs in ~one-third the time with ~half the output tokens at ~a quarter the cost. It is not a crippled nano: SWE-bench Pro 62.7%, DeepSWE 67.2%, Terminal-Bench 2.1 84.7%, GPQA 92.3%, GDPval-AA Elo 1,591.8 — outperforming Opus 4.8 on the coding-agent index (74.6 vs 72.5) — and OpenAI cut its API price 80% on 2026-07-30 to $0.20/$1.20. Its weakness is the very top of its own 1M window: MRCR 8-needle at 512K–1M is only 41.3% (vs Sol's 73.8%).
- **Provider / access:** OpenAI API, Azure, Amazon Bedrock, OpenRouter; ChatGPT Work/Codex (Plus+ tiers).
- **Release:** 2026-07-09 (preview 2026-06-26); knowledge cutoff 2026-02-16.
- **Context window:** 1,050,000 tokens (1.1M via OpenRouter); max output 128K; prompts >272K input bill 2× input / 1.5× output.
- **Modalities:** Text, image and document in → text out.
- **Pricing (as of 2026-10-09):** $0.20/M input, $1.20/M output, $0.02 cache read (90% off), $0.25 cache write; Flex tier $0.10/$0.60; Fast mode $0.40/$2.40.
- **Speed:** 101–127 tok/s (AA, by effort) — OpenAI claims ~9× the speed of the frontier models it undercuts on price.

### Raw benchmarks found

OpenAI GPT-5.6 launch table (Luna; Sol / Terra / GPT-5.5 / Fable 5 / Opus 4.8 in parents):

- Agents' Last Exam: **50.3%** (52.7 / 50.4 / 46.9 / 40.5 / 45.2)
- GDPval-AA v2: **1,591.8 Elo** (1,747.8 / 1,593 / 1,493.7 / 1,759.6 / 1,600.1)
- AA Intelligence Index v4.1: **51.2** (58.9 / 55 / 54.8 / 59.9 / 55.7)
- AA Coding Agent Index v1.1: **74.6** (80 / 77.4 / 76.4 / 77.2 / 72.5)
- SWE-Bench Pro: **62.7%** (64.6 / 63.4 / 59.4 / 80 / 69.2); DeepSWE v1.1: **67.2%** (72.7 / 69.6 / 67 / 69.7 / 59)
- Terminal-Bench 2.1: **84.7%** (88.8 / 87.4 / 85.6 / 83.1 / 78.9)
- GPQA Diamond: **92.3%** (94.6 / 92.9 / 93.6 / 92.6 / 92.0); FrontierMath T1-3: **78.6%**; T4: **58.5%**
- BrowseComp: **83.3%**; OSWorld 2.0: **45.6%**; Capture-the-Flag: **85.2%**
- MRCR v2 8-needle 512K–1M: **41.3%** (Sol 73.8, GPT-5.5 74); GraphWalks BFS 1M F1: 51.2 (256K: 81.3)

Third-party:

- Artificial Analysis (by effort): Intelligence Index **37.3 max / 34.6 xhigh / 32.1 high / 25.0 medium / 21.0 low / 15.5 non-reasoning**; Coding Index 71.4/68.6/63.3/50.7/44.2; Agentic Index 42.1/38.7/34.6/23.9/16.1; GPQA 91.1/89.5; HLE 39.5/37.0/25.8; TB 2.1 80.9/77.9; SciCode 53.6; GDPval-AA 48.2% (max); AA-LCR 83.7 (max); Omniscience 42.7% accuracy / 7.4% non-hallucination
- Vals AI: SWE-bench **93.0%**; MMMU-Pro **85.0%**; GPQA 91.7%; IOI **61.8%**; SkillsBench 60.4%; Vibe Code Bench 22.6% (v1.1: 77.1%); ProgramBench 0.0%; LegalBench 84.0%; Vals Index 51.7%
- LiveBench (max): mathematics 87.2, reasoning 85.64, coding 82.92, agentic coding 48.43, instruction following 60.12
- Arenas: text 1,453 Elo (49th/171), coding 1,501 (52nd), agent −0.012 (37th/61; tool-use 28th, recovery 31st)

### Normalized scores (1–100)

- **Tool use: 80/100.** Agents' Last Exam 50.3% (beats Fable 5 and Opus 4.8), GDPval-AA Elo 1,591.8, BrowseComp 83.3%, CTF 85.2% and TB 2.1 84.7% are frontier-adjacent agentic execution at the nano price point; OSWorld 45.6% and the Arena Agent tool-use rank (28th/61) keep it out of the very top band.
- **Reasoning: 84/100.** GPQA Diamond 91.1–92.3%, HLE 37.0–39.5% (at xhigh/max), AA Intelligence Index 37.3 (max; #11 of 182) and FrontierMath T1-3 78.6% are inside the frontier band for a $0.20 model; the medium-effort default (index 25) and AA-Omniscience 7.4% non-hallucination are the catches.
- **Context window: 86/100.** A 1.05M window (1.1M routed) is the ≥1M band with AA-LCR 83.7% at max effort — but the deep-window evidence is split: GraphWalks BFS 256K 81.3% vs 1M 51.2%, and MRCR 8-needle 512K–1M only 41.3% (vs Sol's 73.8%) — the window is real, full-length retrieval is not.
- **Multimodal: 70/100.** Text + image + document in → text out is the 60–70 band, at its top on Vals' MMMU-Pro 85.0%; no audio/video input and no non-text output.
- **Coding: 82/100.** SWE-bench Pro 62.7%, DeepSWE 67.2%, SWE-V 93.0% (Vals), TB 2.1 84.7% and AA Coding Index 71.4 — above Opus 4.8 on the coding-agent index at a quarter of the cost; Vibe Code Bench 22.6% (vs 77.1% on the newer v1.1 scale) and ProgramBench 0.0% show the agentic-build gap.
- **Cost efficiency: 97/100.** $0.20/$1.20 with $0.02 cache reads and a Flex tier at $0.10/$0.60 — the methodology's ~$0.1/$0.2 ≈ 97–99 tier, backed by the headline numbers (BrowseComp xhigh at $1.33 vs GPT-5.5's $33.27; ALE beats Fable 5 at ~1% of its cost).
- **Overall Score: 80/100.** Best-fit recommendation: the price-performance champion of late 2026 — near-frontier reasoning, coding and agentic scores (SWE-Pro 62.7%, TB 84.7%, ALE 50.3%) at $0.20/$1.20 with 1M context; default it for volume work and spend the savings on Sol for the hardest tasks, and don't trust the far end of the 1M window.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI GPT-5.6 launch + price-cut posts + API docs, Artificial Analysis release analysis and OpenRouter benchmark table, Vals AI, LiveBench via llmap, SWEN); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
