# GPT-5.4 — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.4`; API `gpt-5.4` / `gpt-5.4-pro`; OpenAI API, ChatGPT, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March-2026 flagship for complex professional work — the first general-purpose model with native SOTA computer use (OSWorld-Verified 75.0%, surpassing the 72.4% human baseline), GPQA Diamond 92.0%, MMLU-Pro 93%, SWE-bench 84% (ARMES-reported) — across a 1.05M context at $2.50/$15 per 1M; OpenAI's most token-efficient reasoning model to date (47% MCP Atlas token reduction from tool search).
- **Provider / access:** OpenAI API (reasoning effort none-default/low/medium/high/xhigh; most launch benchmarks at xhigh), ChatGPT (Thinking for Plus/Team/Pro; Pro for GPT-5.4 Pro), Codex (experimental 1M context via `model_context_window`); Batch/Flex at 50%, Priority at 2×. `noFreeId`.
- **Release / knowledge:** 2026-03-05 (default snapshot `gpt-5.4-2026-03-05`); knowledge cutoff 2025-08-31.
- **IDs:** `opencode/gpt-5.4` / `gpt-5.4` / `gpt-5.4-pro` ($30/$180). NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1,050,000-token window (128K out; 272K standard default in some surfaces) and takes text and image input (visual understanding documented; video not documented in the materials captured).
- **Context window:** 1,050,000 tokens in; 128,000 out (1M opt-in/experimental in Codex; standard 272K default; >272K prompts bill the whole session at 2× input and 1.5× output — $5/$22.50 extended).
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.50/$15.00 per 1M input/output; cached input $0.25/M (10%); Batch/Flex 50%; Priority 2×.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor (OpenAI launch, 2026-03-05; xhigh unless noted):

- OSWorld-Verified (computer use): **75.0%** — launch SOTA, far above GPT-5.2's 47.3% and surpassing human performance (72.4%)
- MMMU-Pro (visual reasoning): **81.2%** (vs GPT-5.2's 79.5%)
- OmniDocBench: normalized error **0.109** (vs GPT-5.2's 0.140)
- τ²-Bench Telecom at `none` effort: **64.3%** (vs GPT-5.2's 57.2%)
- Knowledge work: across 44 occupations, matched or exceeded professionals in **83.0%** of comparisons
- Tool search (MCP Atlas, Scale's 36-server setup): **47% reduction** in total token usage
- SWE-Bench Pro (Public): **57.7%** (GPT-5.3-Codex 56.8%, GPT-5.2 55.6%) — matches or outperforms GPT-5.3-Codex at lower latency across reasoning efforts
- Terminal-Bench 2.0: **75.1%** (GPT-5.3-Codex 77.3%, GPT-5.2 62.2%)
- GPQA Diamond: **92.8%** (Pro 94.4%, GPT-5.3-Codex 92.6%, GPT-5.2 92.4%); MMLU-Pro: **93%**
- Humanity's Last Exam: **39.8%** no tools / **52.1%** with tools (Pro 42.7% / 58.7%; GPT-5.2 34.5% / 45.5%)
- ARC-AGI-1 (Verified): **93.7%** (GPT-5.2 86.2%); ARC-AGI-2 (Verified): **73.3%** (Pro 83.3%, GPT-5.2 52.9%)
- FrontierMath: T1–3 **47.6%** (Pro 50.0%), T4 **27.1%** (Pro 38.0%); Frontier Science Research: **33.0%** (Pro 36.7%)
- FinanceAgent v1.1: **74.1**; Harvey's BigLaw Bench: **91%** (per OpenAI, complex transactional analysis)
- WebArena-Verified: **67.3%** (DOM + screenshot interaction; GPT-5.2 65.4%); Online-Mind2Web: **92.8%** (screenshot-only observations; ChatGPT Atlas Agent Mode 70.9%)
- Graphwalks BFS 0K–128K: **93.1%**; Graphwalks parents 0K–128K (accuracy): **89.8%**
- OpenAI MRCR v2 8-needle: **86.0%** at 64K–128K, **79.3%** at 128K–256K
- MMMU-Pro with Python: **81.5%**; OmniDocBench 1.5: **0.109** (run at `none` effort)
- Hallucination claims (vs GPT-5.2, on de-identified prompts users had flagged): individual claims 33% less likely false, full responses 18% less likely to contain errors
- GPT-5.4 Pro: BrowseComp **89.3%** (new SOTA), GPQA 94.4%, HLE w/tools 58.7%, ARC-AGI-2 83.3%, FrontierMath T4 38.0%, Frontier Science 36.7%
- Codex `/fast` mode: up to 1.5× token speed without quality loss; original image detail up to 10.24M pixels

ARMES (independent harness, per ARMES docs; values as listed, configurations not fully specified):

- SWE-bench: **84%** (presumably Verified)
- GPQA Diamond: **92.0%**; MMLU-Pro: **93%**
- Humanity's Last Exam: **73.9%** — far above the ~40–55% frontier range; flagged as an unverified configuration and not adopted for scoring
- Also listed (values not captured): AA Intelligence Index, LCR v1.1, Terminal-Bench Hard, Terminal-Bench 2, LiveBench (2026-06-25), SWE-bench Pro Public, ApprenticeBench CUA, BullshitBench V1, GSO, MCP Atlas, MRCR v2 (8-needle), Surge Chartography, TAU-2 Bench

### Normalized scores (1–100)

- **Tool use: 81/100.** MCP Atlas 70.6% (Scale AI SEAL, verified, xhigh), Terminal-Bench 2.1 78.3% (AA, xhigh) / 81.8% (Terminal-Bench's own board, rank 2), OSWorld-Verified 75.0% (launch SOTA, past the 72.4% human baseline), BrowseComp 82.7% (Pro 89.3%, a launch SOTA), CyberGym 79.0%, WebArena-Verified 67.3% and Online-Mind2Web 92.8% lead, with τ²-Bench Telecom at 98.9% (xhigh — vs 64.3% at `none` effort, the widest effort spread in the file), 83.0% professional-parity across 44 occupations (GDPval, launch SOTA), GDPval-AA v2.1 1246 (AA), a 47% MCP Atlas token reduction from tool search, Claw-Eval 60.3% and DeepSearchQA 73.6% supporting; Toolathlon 54.6% and APEX-Agents-AA 33.3% cap the score.
- **Reasoning: 81/100.** GPQA Diamond 92.8% (reported; Pro 94.4%) / 92.0% (AA) and MMLU-Pro 93% are frontier-band, HLE 52.1% with tools (OpenAI's GPT-5.5 comparison table) reaches the frontier leader band, and ARC-AGI-2 73.3% (Verified; Pro 83.3%) with ARC-AGI-1 93.7% are strong abstract-reasoning fills; FrontierMath T1–3 47.6% (T4 27.1%) and Frontier Science Research 33.0% are mid-field, as is AA's CritPt 23%; AA's own reads are cooler — HLE 44% (no-tools 39.8%), Intelligence Index 39 (xhigh, v4.3.2; Low 28, Non-reasoning 18), LiveBench 78.0% — and AA-Omniscience (50.8% accuracy, 91.7% hallucination rate, composite 6) is a marked weakness that conflicts with OpenAI's claim of 33% fewer false claims (different protocols: a relative improvement on user-flagged prompts vs an absolute hallucination benchmark — both kept); ARMES's HLE 73.9% remains flagged as an unverified configuration and is not adopted.
- **Context window: 93/100.** 1.05M-token window (128K out; the 1M window is opt-in/experimental in Codex, with a standard 272K default and 2×/1.5× billing beyond 272K) with strong retrieval across three suites — AA-LCR v1.1 **82%** (AA), OpenAI MRCR v2 8-needle **86.0%** at 64K–128K / **79.3%** at 128K–256K, and Graphwalks BFS **93.1%** / parents **89.8%** (0K–128K) — but the reads reach only 256K measured depth (nothing published at 512K+ or the full 1.05M), and the 272K default plus the 2×/1.5× billing cliff keep the score out of the 95+ band.
- **Multimodal: 70/100.** text/image in with text out — the top of the +image-in band (60–70); MMMU-Pro 81.2% and OmniDocBench 0.109 normalized error (vs GPT-5.2's 0.140) support it; video input was not documented in the materials captured.
- **Coding: 79/100.** SWE-bench Verified 76.9% (Epoch AI, high) / 78.2% (vals.ai, xhigh) and SWE-bench Pro 59.1% (Scale AI SEAL — rank 2) lead, with LiveCodeBench Pro 87.5%, the AA Coding Index of 71.0, Vibe Code Bench 67.42% and SciCode 56.6% supporting; DeepSWE v1.1 51.8–56.0% (Epoch 51.8%, llm-stats 52.0%, RankedAGI 56.0%) sits well under the 74% frontier bar, and PostTrainBench 19.0%, GSO 31.37% Opt@1 (official) and the SWE Atlas sub-scores (40.8–44.4%) cap the score; the ARMES-reported SWE-bench 84% remains unverified.
- **Cost efficiency: 62/100.** $2.50/$15 per 1M (blended ~$5.63/M at 3:1) sits just above the ~$3/$15≈60 anchor; 10%-of-input cache reads ($0.25/M), half-rate Batch/Flex and the 47% MCP Atlas token reduction offset, while >272K prompts bill the whole session at 2× input/1.5× output ($5/$22.50).
- **Overall Score: 81/100.** (81+81+93+70+79)/5 = 80.8 → 81 — a March-2026 flagship whose native computer use (OSWorld 75.0%), MCP Atlas 70.6%, TB 2.1 78.3%, τ²-Bench Telecom 98.9% (xhigh), frontier-band reasoning (GPQA 92.0–92.8%, HLE 52.1% vendor / 44% AA, ARC-AGI-2 73.3%) and three-suite long-context retrieval (AA-LCR 82%, MRCR 86.0%/79.3%) at $2.50/$15 hold up; DeepSWE 51.8–56.0%, the 91.7% omniscience hallucination rate and the 1.05M window's untested ≥512K depth (plus the 272K default and 2×/1.5× billing cliff) are the gaps.

---

## Update 2026-10-08 (6-day re-research)

Large independent set found (BenchLeader, BenchLM, Vector Wire/AA, RankedAGI, Traictory, Epoch AI):

- Agent / tool use: MCP Atlas **70.6%** (Scale AI SEAL, verified, xhigh; vendor self-report 67.2%) — fills the MCP Atlas gap; Terminal-Bench 2.1 **78.28%** (AA, xhigh) / **81.8%** (Terminal-Bench's own board, rank 2) — fills the TB 2.1 gap; Terminal-Bench 2.0 **75.1%** (self-computed, xhigh); BrowseComp **82.7%**; CyberGym **79.0%**; Toolathlon **54.6%**; Claw-Eval **60.3%** (leaderboard); DeepSearchQA **73.6%** (Muse Spark comparison chart); APEX-Agents-AA **33.3%**; JobBench 38.9%; Gert Labs 64.89%
- Reasoning / knowledge: HLE **52.1%** (OpenAI's GPT-5.5 comparison table) / **39.8%** no-tools (OpenAI) / **43.7%** (AA) — fills the HLE gap; GPQA **92.8%** (reported) / **92.0%** (AA); LiveBench **78.0%**; Epoch Capabilities Index **156.8** (rank 17); AA Intelligence Index v4.3.2 **39.0** at xhigh (27.6 low, 18.2 no-reasoning); AA-Omniscience Index 5.8%, Accuracy 50.8%, **Hallucination Rate 91.7%** — a marked weakness; HealthBench Hard 40.1%, HealthBench Professional 48.1%, MedXpertQA 59.6%
- Coding: SWE-bench Verified **76.9%** (Epoch AI, high, rank 8) / **78.2%** (vals.ai, xhigh, rank 30) — fills the SWE-bench gap; SWE-bench Pro **59.1%** (Scale AI SEAL, rank 2) / **57.7%** (OpenAI); DeepSWE v1.1 **51.8%** (Epoch, rank 46) / 52.0% (llm-stats) / 56.0% (RankedAGI) — fills the DeepSWE gap, well under the 74% bar; SciCode **56.6%** (rank 30); LiveCodeBench Pro **87.5%** (Muse Spark chart); Vibe Code Bench **67.42%** (vals.ai v1.1); AA Coding Index **71.0%**; PostTrainBench v1.1 **19.0%**; SWE Atlas sub-scores: Codebase QnA 40.8%, Refactoring 44.3%, Test Writing 44.4%; React Native Evals 85.3%; ResearchClawBench 15.3%; ExploitGym 6.0%; ApprenticeBench 11%
- **Scores revised**: Tool 76→80 (MCP Atlas 70.6%, TB 2.1 78.3%, BrowseComp 82.7%), Reasoning 79→80 (HLE 52.1% vendor / 43.7% AA, GPQA 92.0–92.8%), Coding 77→79 (SWE-bench Verified 76.9–78.2%, SWE-bench Pro 59.1% rank 2 — capped by DeepSWE 51.8–56.0%), Overall 78→80 ((80+80+90+70+79)/5 = 79.8)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: Tool 80→81, Reasoning 80→81, Context 90→93, Overall 80→81** — the launch table's full benchmark set (garbled in the 2026-10-02 capture; SWE-bench/GPQA/Terminal-Bench were listed as "not in the captured launch materials") is now captured, filling the file's three explicit gaps; Coding 79 / Multimodal 70 / Cost 62 unchanged:

- **Context gap filled — three retrieval suites:** AA-LCR v1.1 **82%** (AA's own read, from the GPT-5.4 vs GPT-5.2 comparison), OpenAI MRCR v2 8-needle **86.0%** at 64K–128K and **79.3%** at 128K–256K, and Graphwalks BFS 0K–128K **93.1%** / parents accuracy **89.8%** (all xhigh, per OpenAI's mini/nano comparison table). The reads are strong — AA-LCR 82% is at the level that earns 94–95 on clean 1M-window models — but they reach only 256K measured depth (nothing published at 512K+ or the full 1.05M), and the 272K standard default plus the 2×/1.5× billing beyond 272K remain usage caveats. Context 90→93, not the 95+ band.
- **Tool-use anchors added:** τ²-Bench Telecom **98.9%** at xhigh (vs 64.3% at `none` effort — the widest effort spread in the file, and at the frontier bar), WebArena-Verified **67.3%** (DOM + screenshot interaction; GPT-5.2 65.4%), Online-Mind2Web **92.8%** (screenshot-only observations; ChatGPT Atlas Agent Mode 70.9%), GDPval-AA v2.1 **1246** and CritPt **23%** (AA reads). BrowseComp: GPT-5.4 Pro reaches **89.3%**, a launch SOTA (GPT-5.4 82.7%, +17 abs over GPT-5.2). Tool 80→81.
- **Reasoning fills:** ARC-AGI-2 (Verified) **73.3%** (Pro 83.3%; GPT-5.2 52.9%) and ARC-AGI-1 (Verified) **93.7%** (GPT-5.2 86.2%) — the ARC-AGI-2 read sits above Grok 4.6's 65.1–67.1% (ARC Prize verified) and is the strongest abstract-reasoning row in the file; FrontierMath T1–3 **47.6%** (Pro 50.0%), T4 **27.1%** (Pro 38.0%) and Frontier Science Research **33.0%** (Pro 36.7%) are mid-field. Reasoning 80→81.
- **Full launch benchmark set captured** (previously garbled): SWE-Bench Pro (Public) **57.7%** (GPT-5.3-Codex 56.8%, GPT-5.2 55.6% — "matches or outperforms GPT-5.3-Codex while being lower latency across reasoning efforts"), Terminal-Bench 2.0 **75.1%** (GPT-5.3-Codex 77.3%, GPT-5.2 62.2%), GPQA Diamond **92.8%** (Pro 94.4%, GPT-5.3-Codex 92.6%), HLE **39.8%** no tools / **52.1%** with tools (Pro 42.7% / 58.7%), FinanceAgent v1.1 **74.1**, MMMU-Pro with Python **81.5%**, OmniDocBench 1.5 **0.109** (run at `none` effort), Toolathlon **54.6%** (51.9%, 46.3%), MCP Atlas self-report **67.2%** (the Scale SEAL verified read is 70.6%).
- **New third-party rows:** GSO (Software Optimization Benchmark for SWE-Agents) **31.37% Opt@1** (official, evals.report); BenchGecko's comparison: SWE-bench Verified 76.9% vs GPT-5.3-Codex's 74.8%, Terminal-Bench 81.8% vs 78.4% (BenchGecko labels the 81.8% "Terminal-Bench 2.0" — it matches the Terminal-Bench 2.1 board read the file already carries, a version-labeling slip on BenchGecko's side); GDPval-AA **37.4%** / **1307 Elo** (AA percentage/Elo reads, BenchLM).
- **Knowledge-work depth:** GDPval **83.0%** (launch SOTA; GPT-5.3-Codex and GPT-5.2 70.9%) — already carried as the 83.0% professional-parity row; internal investment-banking modeling **87.3%** (OpenAI's post; VentureBeat reports 87.5% — a 0.2-point sourcing discrepancy, both noted) vs GPT-5.2's 68.4%; presentations preferred **68.0%** of the time (human raters, vs GPT-5.2); Harvey's legal team reports **91%** on BigLaw Bench; Mercor's CEO calls it the best model Mercor has tried, top of APEX-Agents (the AA-run APEX-Agents-AA read of 33.3% remains the scored cap — different suites).
- **Hallucination conflict (flagged):** OpenAI claims individual claims are 33% less likely false and responses 18% less likely to contain errors (vs GPT-5.2, on de-identified prompts users had flagged); AA's Omniscience measurement reads a 91.7% hallucination rate, 50.8% accuracy, composite 6. Different protocols (a relative improvement on a filtered prompt set vs an absolute hallucination benchmark) — both kept, neither adopted over the other.
- **Serving profile (AA):** 93.1 tok/s (faster than the 79 median), blended $2.17/M (7:2:1), $2.50/$15.00 list (somewhat expensive vs the $2.00/$10.00 medians); the AA release page ladders the family — Xhigh 39 / Low 28 / Non-reasoning 18 on the Intelligence Index (the file's 27.6/18.2 reads round to the same); GPT-5.4 (xhigh) edges GPT-5.5 (xhigh) 39* vs 38* on the current index (both estimated reads on AA's now-deprecated long-workload pages). AA's measured TTFT of 170.22s is an artifact of the deprecated 1M-input workload — not adopted.
- **API details (OpenAI docs):** default snapshot `gpt-5.4-2026-03-05`; reasoning.effort none (default) / low / medium / high / xhigh; tools include tool_search, computer_use, mcp, hosted_shell, apply_patch, skills, code_interpreter, image_generation, web_search, file_search; features streaming, structured_outputs, function_calling, prompt_caching; GPT-5.4 Pro at $30/$180 ($45 blended); the non-reasoning variant's profile: HLE 11%, CritPt 1%, AA-Omniscience −16, AA-LCR 58%.
- **Rollout/ecosystem:** GPT-5.4 Thinking for ChatGPT Plus/Team/Pro (GPT-5.2 Thinking to Legacy Models, retired 2026-06-05); GPT-5.4 Pro on Pro/Enterprise; Codex `/fast` mode up to 1.5× token speed; 10.24M-pixel "original" image detail; two-stage security monitoring (topic classifier + AI security analyst) with message-level real-time blockers; jailbreak resistance improved vs GPT-5.1 Thinking, roughly on par with GPT-5.2 Thinking on standard benchmarks. TNW notes the launch comparisons are all against GPT-5.2, not the newer GPT-5.3 — a pattern worth noting.
- **Source-quality note:** Bind AI's GPT-5.4 vs Opus 4.6 piece (2026-03-06) lists GPT-5.4's ARC-AGI-2 at "~52.9%" — that is GPT-5.2's figure; OpenAI's own table has GPT-5.4 at 73.3% and GPT-5.2 at 52.9%. The Bind AI row is a model-attribution error and was not adopted.
- Score impact: Tool 80→81 (τ²-Bench Telecom 98.9% xhigh + WebArena/Online-Mind2Web + GDPval-AA 1246; caps unchanged), Reasoning 80→81 (ARC-AGI-2 73.3% + ARC-AGI-1 93.7%; caps unchanged), Context 90→93 (AA-LCR 82% + MRCR 86.0%/79.3% + Graphwalks 93.1%/89.8%; only 256K-depth evidence, 272K default and billing cliff remain), Overall 80→81 ((81+81+93+70+79)/5 = 80.8).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI GPT-5.4 launch + API docs + mini/nano comparison table, ARMES docs, OpenAI Developer Community, Artificial Analysis, Scale AI SEAL, Epoch AI, vals.ai, Terminal-Bench board, evals.report, BenchLM, BenchGecko, digitalapplied); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4.md`, using the same headings.
