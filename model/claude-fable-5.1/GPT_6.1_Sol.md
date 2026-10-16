# Claude Fable 5.1 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-fable-5-1`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's generally available frontier reasoning/agent configuration. Officially the same underlying model as Mythos 5.1, but with different safeguards and access; measurements of one deployment are not automatically measurements of the other [S1,S2].
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS [S1].
- **Release / knowledge:** September 1, 2026; June 2026 cutoff [S1].
- **IDs:** `claude-fable-5-1`, Bedrock `anthropic.claude-fable-5-1`. `claude-mythos-5-1` is separately identified access, not a suffix silently removed from benchmark labels. No Zen Free ID verified [S1].
- **Context window:** 1M tokens, 128K output [S1]. The extended 300K batch list on the same page does not list Fable; that limit is not borrowed from Opus.
- **Modalities:** Text/image input, text output and document/file workflows. Adaptive thinking always on, default API high; function/tool use supported but forced tool choice returns an error. Thinking blocks are model/conversation-bound [S1].
- **Pricing (as of 2026-10-16):** $10 input / $50 output per million tokens; $0.25 cached read, $12.50 five-minute cache write, $20 one-hour write. Batch half price [S1]. Cursor documents retention opt-in, while Anthropic offers eligible enterprise ZDR/EFS arrangements; neither policy is assumed universal [S2,S5].
- **Architecture:** Proprietary; parameter count undisclosed [S3].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **91.4%**, independent AA launch max/default-fallback [S6]; Vals launch **85.02%**, or **79.03%** counting fallback-assisted tasks as failures [S4].
- Terminal-Bench 4.0 **55.8%**, vendor production safeguards [S2]; Vals current max **58.08% ±3.31** [S4].
- GDPval-AA v2 **1853 Elo**; AA-Briefcase **1694 Elo**, independently measured using AA's Stirrup reference harness. AA explicitly says the GDPval lead over Opus 5 is within uncertainty [S6].
- AutomationBench **31.4%**, vendor [S2]; OSWorld August task release **77.9% partial / 41.7% strict**, vendor [S2]. Partial versus strict and task-version differences are material.
- Finance Agent v2 **58.88% ±2.06**; Tax Agent **49.19% ±3.61, #1/69**; Harvey Legal Agent **6.67% ±1.17**, Vals [S4].
- SRE Bench **22.90% ±2.60** fallback-enabled, versus launch fallback-as-failure **10.69%**; **74.43%** of that benchmark's tasks involved fallback [S4].
- Toolathlon Verified **77.8% Pass@1** is secondary system-card transcription [S7], not independently parsed from the system card here. Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE **60.9% no tools / 65.0% with tools**, vendor production configuration [S2]; AA launch **59.1%** in its separately run suite [S6].
- GPQA Diamond **93.43% ±1.86**, MMLU Pro **92.38% ±0.27**, Vals [S4].
- AA Intelligence Index **66 at launch max with fallback** [S6]; current **53, #5/217**, v4.3.2, max/default-fallback [S3]. Not comparable on an unchanged numerical scale.
- AA-Omniscience accuracy **67.2%**, hallucination rate **72.6%** at launch. The latter means attempted incorrect responses among questions not answered correctly, not 72.6% of all answers false [S6].
- Vals Index **65.83% ±1.11, #4/48** current; historical launch **67.87%**; ProofBench v1.1 **100.00%** [S4].
- CritPt / LCR / MLCR: no verified numeric result found in inspected prose.

Coding:

- SciCode **62.0%**, AA launch [S6].
- LiveCodeBench **90.52% ±0.86, #1/143**; Vibe Code Bench v1.1 **90.26% ±1.57**; Code Migration **54.61% ±4.81**; ProgramBench **7.00% ±1.81**, Vals [S4].
- SWE-bench Multimodal **61.25% ±2.23**, Vals [S4].
- CursorBench 3.2.0 **73.4% max**, vendor/partner result; Terminal-Bench Science **52.6%**, vendor [S2]; Vals science **40.00% ±5.90**, separate harness [S4].
- SWE-Pro **81.2%**, secondary system-card transcription [S7]. SWE-bench Verified / DeepSWE exact-model result: no verified numeric score found in inspected direct sources.

Long context and multimodal:

- No verified MRCR/RULER full-window retrieval percentage found; 1M is capacity, not demonstrated perfect recall [S1].
- MMMU Pro **90.64% ±0.70, #1/93**, Vals [S4].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Claude Fable 5.1" official Anthropic model documentation`; `"Claude Fable 5.1" independent Artificial Analysis benchmark`; `"Claude Fable 5.1" review pricing limitations`. Read official model docs and joint announcement, independent AA current/launch measurements and Vals, Cursor documentation, and Kingy's detailed review. An initial guessed news URL returned 404; the actual joint announcement was then read.

Fallback effects are central. AA's launch index includes about 4% fallback output tokens; Vals discloses large task-level effects on SRE and terminal tests [S4,S6]. Neither is pure isolated Fable-weight execution. Vendor HLE 65% with tools versus AA 59.1% is not silently averaged; tool/harness configurations differ [S2,S6]. Cheap cache reads do not guarantee cheaper completed work: Anthropic estimated 25–45% savings at default-effort usage, whereas AA observed 1.7× output tokens and 20% higher max-effort task cost at launch [S2,S6]. Current AA $7.63/task and historical $3.76/task belong to different suite snapshots [S3,S6]. Kingy's small pilot reported identical perfect outcomes on cheaper models but its maintenance review lacked raw artifacts; it is a workload-saturation caution, not verified evidence that frontier gains disappear [S7]. Its blanket retention wording and older Opus-default recommendation are qualified by current official eligible-ZDR terms and Opus 5.5 guidance [S1,S2,S7].

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong terminal and professional-work evidence, capped by fallback dependence and weak legal-agent/SRE performance without it [S2,S4,S6].
- **Reasoning: 95/100.** HLE, GPQA, ProofBench and current independent indices justify frontier credit; hallucination and snapshot/harness variance limit a ceiling rating [S2–S4,S6].
- **Context window: 95/100.** Official 1M capacity qualifies for the top tier, without verified ≥98% retrieval [S1].
- **Multimodal: 82/100.** Excellent image/document reasoning, including MMMU Pro 90.64%, but no verified native audio/video input or non-text output [S1,S4].
- **Coding: 95/100.** Strong SciCode, terminal, LiveCodeBench and multimodal SWE evidence, capped by fallback attribution and uneven migration/ProgramBench [S4,S6].
- **Cost efficiency: 30/100.** $10/$50 and current AA $7.63/task remain premium despite unusually cheap cached reads [S1,S3].
- **Overall Score: 92/100.** (94 + 95 + 95 + 82 + 95) / 5 = 92.2 → 92; suited to demanding sustained coding and document agents when its extra cost is justified. Cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/fable-5-1/overview — primary specs, API constraints, dates and pricing.
- [S2] https://www.anthropic.com/claude-fable-and-mythos-5-1 — joint primary launch, benchmark footnotes and eligible enterprise privacy arrangements.
- [S3] https://artificialanalysis.ai/models/claude-fable-5-1 — current independent v4.3.2 max/default-fallback profile.
- [S4] https://www.vals.ai/models/anthropic_claude-fable-5-1 — independent current/historical suite and fallback sensitivity.
- [S5] https://cursor.com/docs/models/claude-fable-5-1 — provider-specific retention, automatic fallback and pricing.
- [S6] https://artificialanalysis.ai/articles/claude-fable-5-1 — independent launch metrics, Stirrup harness and cache/token economics.
- [S7] https://kingy.ai/blog/claude-fable-5-1-benchmarks-price-mythos-access/ — secondary system-card transcription and unreverified historical pilot.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches, primary documentation and multiple independent evaluator comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
