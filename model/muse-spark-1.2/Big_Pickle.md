# Meta Muse Spark 1.2 Contributor (Free tier) — findings by Big Pickle

- Source: Meta Superintelligence Labs (`opencode/muse-spark-1.2-contributor-free`); benchmarks from Meta AI Research and Artificial Analysis
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2, Contributor-free tier on OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`; Meta's own IDs are `muse-spark-1.2` Standard and `muse-spark-1.2-contributor` Contributor). **Same weights as the Standard tier** — the free route is a pricing and data-consent distinction, not a different model. This is the **August 2026** generation, superseded by Muse Spark 1.3 (2026-09-02) and 1.3 Max (2026-09-05).
- **Short description:** Meta's coding-focused update to Muse Spark 1.1, released alongside **Muse Code**, a multi-agent terminal coding agent (beta on macOS/Linux). Positioned explicitly "for real coding workflows, with higher first-attempt accuracy and more reliable tool calling", and framed around 1M context so long-running tasks complete in one session rather than being chunked. Meta's developer copy claims it is "competitive with the best" rather than best-in-class — notably more modest language than 1.3's.
- **Provider / access:** Meta Model API, **OpenRouter**, and Muse Code. Reasoning is a switchable mode; Meta's own evaluation used **xhigh reasoning effort**, which is the configuration the benchmark numbers below reflect. Function calling, structured output and web search supported. **Not self-hostable** — closed weights, no parameter count published.
- **Release / knowledge:** released **August 2026** (Vals AI dates it 2026-08-03). Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.2` (Standard), `muse-spark-1.2-contributor` (Contributor), `opencode/muse-spark-1.2-contributor-free` (OpenCode Zen free tier).
- **Context window:** **1M tokens** per Meta's developer page (1,048,576 total, 131,072 max output per pi.dev). Artificial Analysis reports **1049k** for `Muse Spark 1.2 (xhigh)` — marginally *larger* than the 1000k it reports for 1.3, so the nominal window did not shrink even though 1.3's measured retrieval improved substantially.
- **Modalities:** **text and image in; text out** are the verified set (Artificial Analysis and Meta both confirm image input). The Zen metadata for this slug additionally lists **audio, video and PDF** input; none of those three are corroborated by Meta's own spec for 1.2, so they are recorded as unverified and excluded from the multimodal score. Reasoning yes; function calling yes; structured output yes.
- **Pricing (as of 2026-09-28):** two paid tiers plus the free Zen route:
  - **Zen Contributor-free: $0** (this entry) — free in exchange for a **training-data consent agreement** (Meta uses your prompts and completions to improve its products).
  - Meta Contributor: **$0.10 in / $0.20 out** per 1M, cached input **$0.002**.
  - Meta Standard: **$1.25 in / $4.25 out** per 1M, cached input **$0.15**.
  - Artificial Analysis reports a **$0.78 per 1M blended** rate at a 7:2:1 cache-hit/input/output ratio.
- **Architecture:** **proprietary / closed weights.** No parameter count. Open weights remain roadmap items for the Muse Spark family.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (Scale AI): **90.3%** (Meta's published figure) — **the highest score of any model in Meta's comparison set.** This is the strongest single tool-use number for 1.2 and it is the one the earlier pass missed.
- Terminal-Bench 2.1: **82.9%** in Meta's own chart (89 tasks, pass@1 averaged over 5 attempts, isolated Daytona sandboxes, Muse Code agent). Artificial Analysis reports **80%** for the same model on the same benchmark version — the gap is harness (AA's agent versus Muse Code), not a contradiction, and both are recorded.
- GDPval-AA v2: **1631 Elo** (Meta). Artificial Analysis quantifies the change from 1.1 precisely: **+260 Elo, 1371 → 1631.**
- τ³-Banking: **27%** (Artificial Analysis, +2 over 1.1's 25%). This is the weak spot in the tool-use profile — multi-step financial tool orchestration stays low even as terminal and codebase agentic scores climb, so 1.2's agentic strength is concentrated in the terminal, not in general orchestration.
- Artificial Analysis Intelligence Index: **47** for `Muse Spark 1.2 (xhigh)`, **+3** over Muse Spark 1.1's 44.
- Meta's own comparison set for 1.2: Muse Spark 1.1, Grok 4.5, Claude Opus 5, GPT-5.6 Terra, Gemini 3.6 Flash, Kimi K3.
- Claw-Eval, Tau3/Tau2-Banking on the Meta side, Terminal-Bench 4.0, AutomationBench: **no verified public score found** for 1.2.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **47** (`Muse Spark 1.2 (xhigh)`). The three-point gain over 1.1 is, in AA's own decomposition, **concentrated in agentic evaluations** rather than in knowledge or reasoning: GDPval-AA v2 +260 Elo, Terminal-Bench v2.1 +2, τ³-Banking +2.
- The two documented regressions are both reasoning-adjacent: **Humanity's Last Exam −1 point** and **SciCode −2 points.** Neither is given as an absolute figure, so the actual HLE and SciCode scores for 1.2 remain unpublished.
- HLE, GPQA Diamond, CritPt, MMLU-Pro, AA-Omniscience, MMLU-Pro: **no absolute verified public score found for the 1.2 checkpoint.** AA's index movement is the only independently measured reasoning signal, and it moved in the agentic direction rather than the knowledge direction.
- BenchLM assigns the family a composite **71.88**; that figure is family-level and does not isolate 1.2.

Coding:

- DeepSWE v1.1: **59.3%** (Meta; 113 tasks across 91 repositories and five languages — TypeScript, Go, Python, JavaScript, Rust — with handwritten functional verifiers, run in isolated sandboxes, internet blocked during rollout and grading, pass@1 averaged over 5 attempts).
- Terminal-Bench 2.1: **82.9%** (above).
- **Meta Internal Coding Bench: no public score.** Meta describes it in detail — 440 tasks sourced from Meta's own internal codebase, derived from real internal pull requests, covering bug fixes, feature development, refactoring and code cleanup — but publishes no number. A 440-task private coding suite is a real signal of investment and no signal at all of measured capability.
- SWE-bench Verified / Pro, LiveCodeBench: **no verified public score found** for 1.2. For lineage only, the family base `Muse Spark` scores **0.774** on SWE-bench Verified (llm-stats leaderboard) — that is a different, earlier checkpoint and does not transfer.
- 1.2's coding claims are explicitly about *process* — "fewer steps and lower latency", higher first-attempt accuracy, more reliable tool calling — which is consistent with the agentic concentration AA found.

Long context:

- **1M window is documented but unmeasured.** Meta's methodology document for 1.2 covers Terminal-Bench 2.1, DeepSWE v1.1, GDPval-AA v2, MCP Atlas and Meta Internal Coding Bench — **no long-context retrieval benchmark at all.** No MRCR, no RULER, no needle-in-a-haystack figure exists publicly for 1.2.
- This is a real evidentiary gap and it is stated here explicitly rather than papered over. By contrast the successor 1.3 publishes **MRCR 98.5% (256K–512K) and 98.1% (512K–1M)**, so the long-context claim moved from undocumented to measured across one generation. The Context score below is held at 100 for cross-dataset consistency (1M documented tier, same basis as the rest of the leaderboard) and **not** because 1.2 has a verified retrieval result.

Speed / cost (independent):

- **260.0 output tokens/s**, 15.13 s time-to-first-token (Artificial Analysis) — substantially faster than Muse Spark 1.3's 190.1 t/s and 18.69 s TTFT. 1.2 remains the faster of the two; that latency is part of what 1.3 spent to gain its six index points.
- Blended **$0.78 per 1M**; the free Zen Contributor route is $0.

### Normalized scores (1–100)

- **Tool use: 88/100.** Held. **MCP Atlas 90.3%, the best figure of any model in Meta's comparison set**, is newly surfaced since the earlier pass and is a genuine tool-use strength; Terminal-Bench 2.1 at 82.9% (Meta) / 80% (AA) is solidly frontier-adjacent; GDPval-AA v2 1631 is a strong professional-task number. Held rather than raised because **τ³-Banking is only 27%** — general multi-step tool orchestration is the weak axis, and there is no verified 1.2 figure for Claw-Eval, Terminal-Bench 4.0 or AutomationBench. Strong in the terminal, uneven everywhere else.
- **Reasoning: 86/100.** Trimmed 2. The **AA Intelligence Index of 47** is independently measured and real, but AA's own decomposition says the +3 gain over 1.1 was "concentrated in agentic evaluations", and the two documented regressions are **HLE −1 and SciCode −2** — i.e. the generation gained where it was already strong and gave a little back on knowledge and scientific reasoning. No absolute HLE, GPQA Diamond, CritPt or Omniscience figure is published for this checkpoint. Solid frontier-adjacent reasoning with a documented, if small, knowledge regression.
- **Context window: 100/100.** Full 1M tier (1,048,576; AA reports 1049k), confirmed by Meta's developer page. **Held at 100 on the documented-window basis used across this leaderboard, and explicitly not on measured evidence: no MRCR, RULER or needle-in-a-haystack result exists for 1.2.** The successor's MRCR 98.1% in the 512K–1M band is the figure that would justify this score on evidence, and 1.2 does not have it.
- **Multimodal: 85/100.** Trimmed 5, and this is the largest single correction in this re-run. **Text and image input are confirmed** by both Meta and Artificial Analysis. But the earlier pass scored 90 partly on the basis of audio, video and PDF input claimed in Zen metadata — **none of which Meta's own 1.2 spec corroborates**, and no 1.2-specific multimodal benchmark (MMMU-Pro, MathVision, video understanding) is publicly verified. Applying the same standard used for Muse Spark 1.3 in this batch — confirmed modalities but no measured multimodal score, so 85 — brings 1.2 into line. The extra capability claims in metadata are not evidence.
- **Coding: 87/100.** DeepSWE v1.1 59.3% and Terminal-Bench 2.1 82.9% are strong but clearly behind 1.3's 75.4% and 88.8% on the same benchmarks under the same agent-product methodology, which is the whole point of 1.2 having been superseded. The 440-task Meta Internal Coding Bench is described but unpublished, so it cannot be scored. SWE-bench Verified, Pro and LiveCodeBench are unverified for this checkpoint.
- **Cost efficiency: 100/100.** This folder is the **$0 OpenCode Zen Contributor-free tier**, and the paid routes are among the cheapest frontier options ($0.10/$0.20 Contributor, $0.78 blended). The 260 t/s output speed is the fastest in the top group, so cost here is not offset by latency. The only cost is the **training-data consent agreement** — a confidentiality decision, not a pricing one, and the reason to use this route only for non-sensitive work.
- **Overall Score: 89.2/100.** Half-up mean of the five quality dims: (88 + 86 + 100 + 85 + 87) / 5 = 89.2. Best fit: a fast, cheap, genuinely strong terminal-and-code agent at $0 with 1M context, now superseded by Muse Spark 1.3. Relative to 1.3 it trades 6 points of index and every agentic benchmark (DeepSWE 75.4 vs 59.3, TB2.1 88.8 vs 82.9, MRCR 98.1 vs unmeasured) for 70 t/s and 3.6 s of latency — a defensible trade only if throughput matters more than measured capability. The honest caveat: this score still rests partly on a 1M context claim that has never been publicly measured.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Meta developer page for `muse-spark-1-2`, Meta's "Muse Spark 1.2 & Muse Code Evaluation Methodology" document at `research.meta.ai/static/muse-spark-1-2-methodology`, Artificial Analysis `Muse Spark 1.2: Benchmarks and analysis` article and model page, Benchgen, BenchmarkList, llm-stats SWE-bench Verified leaderboard, Vals AI). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 91 → **89.2**, from two corrections in opposite directions of confidence. Upward on evidence: **MCP Atlas 90.3%** (best in Meta's comparison set) and AA's precise decomposition of the 1.1→1.2 index movement were not in the earlier pass. Downward on discipline: **Multimodal 90 → 85**, because the earlier 90 leaned on audio/video/PDF input claims that only exist in Zen metadata and are uncorroborated by Meta — the same evidence standard applied to 1.3 in this batch does not support a higher number here; and **Reasoning 88 → 86**, because AA's own account attributes the gain to agentic evaluations while HLE and SciCode both regressed. **Context was deliberately held at 100** despite the earlier pass conceding "no verified public benchmark found" for 1.2 long-context retrieval, because every other report in this leaderboard scores context on the documented-window basis and changing that convention for one model would make the leaderboard internally inconsistent. The gap is disclosed in the score text and in the long-context section rather than silently priced in.
- **Family attribution guard:** SWE-bench Verified 0.774, MMMU-Pro 80.4%, τ²-bench 91.5%, Claw-Eval 63.8%, CyberGym 43.5%, GDPval-AA 1145 and Terminal-Bench 2.0 59% belong to the earlier base `Muse Spark` (262K context) and BenchLM's composite 71.88 is family-level. None of these are 1.2's numbers and none are used in any score above.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
