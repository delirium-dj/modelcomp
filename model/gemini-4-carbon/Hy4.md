- Source: Google DeepMind/Gemini 4 Carbon
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's long-horizon, high-reasoning flagship built on the Gemini 4 Argon base as a specialised enhancement, targeting complex software engineering, multi-step agent tasks, scientific research and cybersecurity. A distinct released SKU, not an alias; Argon remains the base model and Hydrogen is the later fast-tier sibling.
- **Provider / access:** Gemini API via Google AI Studio; consumer access through the Gemini app / Search AI mode requires a Google AI Ultra subscription. First distributed on 2026-10-28 via the Fairwind Program to vetted cyber-defence practitioners, then opened to developers/enterprises/researchers on 2026-11-10 and globally on 2026-11-11. Google Antigravity's Orchestrator can switch between Carbon and Hydrogen within one session (announced 2026-11-12).
- **Release / knowledge:** Announced 2026-10-28; generally available 2026-11-10/11. Knowledge cutoff: no verified public score found.
- **IDs:** `gemini-4-carbon` (Google AI Studio official model ID).
- **Context window:** 1,048,576 tokens unified (input + reasoning + output); standard synchronous max output 65,536 tokens, extensible to 1,048,576 via Long Decode (Google AI Studio documentation, via Baidu Baike). Verified by the GraphWalks 256k→1M row in Google's official benchmark table.
- **Modalities:** text, image, video, audio and PDF in; text out. Three reasoning-effort levels (low / medium / high). Native tool use, function calling and structured output. No verified image/audio generation output.
- **Pricing (as of 2026-11-14):** no verified public per-1M-token price found in the pages retrieved; access is described as Gemini API billing plus the Google AI Ultra consumer subscription. No free ID verified.
- **Architecture:** Proprietary, closed weights; not a fresh pretrain — an enhancement of the Gemini 4 Argon base. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA-scored): **65.2%** — best of the five-model official comparison (Argon 57.1%, GPT-6 Astra 59.1%, Opus 5.5 59.6%, Fable 5.1 52.0%)
- Agents' Last Exam v1.1: **77.4%** — best in table (Argon 69.0%, Astra 73.1%, Opus 5.5 71.6%)
- AutomationBench (Zapier): **53.9%** — best in table (Argon 51.3%, Astra 41.4%, Opus 5.5 42.5%, Fable 5.1 31.4%)
- Vending-Bench 2 bank balance: **$16,484** — best in table (Argon $13,718, Astra $15,515, Opus 5.5 $9,235, Fable 5.1 $5,422)
- OSWorld-2.1 (offline subset): **81.5%** (Opus 5.5 leads at 87.2%)
- SWE-sweep: **9.6%** — best in table (Astra 9.5%, Opus 5.5 3.6%, Fable 5.1 2.9%)
- HubX real-bug evaluation: **94%** issue-resolution rate on 16 real bugs in a ~14K-test codebase with no new regressions (vendor-cited case study)
- Reported #1 in CursorBench 4.0, Perplexity WANDR and Zapier AutomationBench; #2 in Google/Artificial Analysis MKA
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59** — best in table (Opus 5.5 58, Astra 57, Argon 50, Fable 5.1 49); ranked #1 on the AA leaderboard at debut, #2 after Claude Fable 5.2 launched
- Vals Index v2.2: **70.4%** — best in table (Opus 5.5 70.2%, Argon 69.2%, Astra 65.0%)
- RiemannBench: **72.0%** (Argon leads at 76.0%)
- Terminal-Bench-Science 0.1 (AA): **64.8%** — best in table (Astra 63.3%, Opus 5.5 59.0%, Argon 52.9%, Fable 5.1 43.3%)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- FrontierSWE 2: **61.2%** (Astra leads at 65.5%, Opus 5.5 62.3%, Argon 55.0%, Fable 5.1 56.3%)
- SWE-sweep 9.6% and Terminal-Bench 4.0 65.2% as above; CWE-bench **71.0%** — best in table
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- GraphWalks 256k to 1M, BFS (F1): **96.2%** — best in table by a wide margin (Argon 84.2%, Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%)
- Chartography **72.5%** — best in table; Blueprint-Bench 2 similarity **58.6%** — best in table
- SEC-bench Pro **88.2%** — best in table; ExploitGym **54.8%** — best in table
- MKA (multimodal knowledge agent): **ranked #2** in the Google/Artificial Analysis joint benchmark
- Security: Gray Swan indirect prompt-injection attack success **0%**; **99%** of adaptive red-team attack paths blocked; single-attempt breach rate **0.8%** (Argon 3.1%); automated cyber-attack query success **2.17%** (Argon 9.86%); no novel universal jailbreak found across a 132-hour / 13,000+ request external test
- Independent MRCR / RULER figures: no verified public score found

### Normalized scores (1–100)

- **Tool use: 97/100.** Best-in-table on Terminal-Bench 4.0 (65.2%), Agents' Last Exam (77.4%), Zapier AutomationBench (53.9%), Vending-Bench 2 ($16,484) and SWE-sweep (9.6%); capped just below ceiling by trailing Opus 5.5 on OSWorld-2.1 (81.5% vs 87.2%).
- **Reasoning: 96/100.** Highest AA Index v5.0 (59), Vals Index v2.2 (70.4%) and Terminal-Bench-Science (64.8%); capped by a lower RiemannBench (72.0% vs Argon's 76.0%) and no published GPQA/HLE figures for this ID.
- **Context window: 98/100.** Verified 1,048,576-token unified window, Long Decode to 1M output, and a dominant GraphWalks 96.2% long-context retrieval score.
- **Multimodal: 95/100.** Text/image/video/audio/PDF input coverage with best-in-table Chartography (72.5%) and Blueprint-Bench 2 (58.6%) plus #2 in MKA; capped because output is text-only.
- **Coding: 94/100.** Best-in-table SWE-sweep, Terminal-Bench 4.0 and CWE-bench, plus a vendor-cited 94% real-bug resolution; capped by trailing GPT-6 Astra on FrontierSWE 2 (61.2% vs 65.5%).
- **Cost efficiency: 55/100.** No public per-token price was verifiable this pass and consumer access is gated behind Google AI Ultra; long high-effort reasoning is explicitly token-intensive. Scored conservatively, excluded from Overall.
- **Overall Score: 96/100.** Half-up mean of 97, 96, 98, 95, 94 = 96.0 → 96. Best fit: long-horizon multi-step software engineering, formal verification and security research where the largest effective context and sustained reasoning dominate cost.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: Google DeepMind's official Gemini 4 performance/methodology table (the Carbon column and its four comparators) plus the Baidu Baike Gemini 4 Carbon article for IDs, modalities, context window and release history. Figures measured under a named third-party harness are labelled with that harness; vendor-cited case studies are labelled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini — Google DeepMind (official Gemini 4 Carbon benchmark table)](https://deepmind.google/models/gemini/nano/)
  - [Gemini 4 Carbon — 百度百科 (model ID, context window, modalities, release, safety)](https://baike.baidu.com/item/Gemini%204%20Carbon/69682336)
