# Muse Spark 1.3 — findings by Claude Opus 5

- Source: Meta / Meta Superintelligence Labs (`muse-spark-1.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (one model, several access tiers — `max` partner-preview reasoning tier, `xhigh` general production tier, plus a discounted "Contributor" rate on the Meta Model API; the Contributor/Free wording is a pricing tier, not a separate model)
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent and coding workflows, released 2026-09-02. It is the successor to Muse Spark 1.2, keeping the same 1M-token window while cutting tool calls and token burn on identical coding tasks. Variant/alias flag: `max`, `xhigh`, `Contributor` and `Free` are tiers of this one entry — they must not be tracked as separate models.
- **Provider / access:** Meta Model API (sole tracked provider; `developer.meta.com` documentation, `meta.ai` playground), plus Meta's own Muse Code CLI agent; the `max` tier is gated to selected enterprise partners pending safety testing while `xhigh` powers standard API deployments. Resold on aggregator catalogs as a Responses-API-style chat endpoint; no OpenAI Chat Completions-native first-party surface documented.
- **Release / knowledge:** Released 2026-09-02 (Meta AI Research announcement; corroborated by LLM Stats and Layer3Labs). Knowledge cutoff: no verified public figure found.
- **IDs:** `muse-spark-1.3` on the Meta Model API. Access tiers are selected by rate card / `reasoning_effort`, not by distinct model IDs (`max` is the gated preview tier). No `opencode/*` ID verified from primary sources within this search budget.
- **Context window:** 1,000,000 input tokens with 943.7K max output tokens, per the LLM Stats provider table for the Meta Model API (`1.0M/943.7K`, snapshot dated 2026-10-01); Layer3Labs independently confirms the 1M window was "preserved from the prior model generation". The ~944K output ceiling is unusually large and is itself a provider-table figure rather than a vendor-documented limit.
- **Modalities:** Input: text, image, audio, video. Output: text only. Reasoning: yes (effort tiers, `max` gated). Tool calls: yes — the model is explicitly tuned for agentic tool loops in Muse Code. JSON mode: no verified public documentation found.
- **Pricing (as of 2026-10-03):** Meta Model API standard rate **$1.25 / 1M input, $0.150 / 1M cached input, $4.25 / 1M output** (blended $1.39 / 1M at a 20:1 in:out mix). Conditional **Contributor rate: $0.100 / 1M input, $0.0020 / 1M cached input, $0.200 / 1M output**, explicitly conditioned on Meta being allowed to "use prompts and completions to improve its products" — a data-usage trade, not a free tier. Caveat: Layer3Labs reports Meta published *no* itemized rate card on launch day and that trackers estimated a blended ~$0.80 / 1M, so the concrete card above rests on the LLM Stats provider table rather than a vendor price page.
- **Architecture:** Proprietary, closed weights for both tiers (no local weights released). Parameter count, active parameters and MoE structure: not disclosed — no verified public figure found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta official figures published 2026-09-02, reported by Layer3Labs; "bash execution accuracy, command navigation, and environment tool control")
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWEAtlas CodeBase QnA 59.4%** (Meta official, via Layer3Labs — repository-wide comprehension and architectural queries); Toolathon and MCP-Atlas: no verified public score found
- Tool-call efficiency: **~20% fewer tool calls and ~25% fewer generated tokens than Muse Spark 1.2** on identical multi-step tasks, measured by Meta Superintelligence Labs inside the Muse Code CLI agent (vendor-measured, not an independent harness)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **48** for Muse Spark 1.3 (Max) on the Artificial Analysis model page; **62** reported by Bloomberg for the partner-only max variant, which would place it behind only Claude Fable 5.1 and Claude Opus 5. Layer3Labs documents this as an unresolved discrepancy between partner preview builds and public evaluations — no single figure is independently settled.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** — and notably absent by third-party account: coverage of the public release flags "missing exact SWE-bench Verified/Pro results" as a reason leaderboard claims cannot be compared cleanly
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **DeepSWE 1.1 75.4%** (Meta official, 2026-09-02; end-to-end agentic resolution of software issues across complete repositories). Third-party comparison reporting places that result just ahead of Claude Opus 5 at 74.0 and GPT-5.6 Sol at 73.0 on the same benchmark. Counter-signal: at least one hands-on review reports that the DeepSWE lead does not reproduce as real-world output quality.

Long context:

- **98.5% long-context retrieval across the full 1M-token window** (Meta official, via Layer3Labs — needle-in-a-haystack style recall on large log files and multi-file diffs). The harness is not named as MRCR, RULER or GraphWalks, and no independent replication was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 at **88.8%** clears the methodology's ~88%+ frontier anchor outright, and the vendor-measured ~20% tool-call reduction versus 1.2 is a genuine agentic-efficiency signal rather than a headline accuracy number. Capped at 92 because Tau3-Banking, GDPval-AA, OSWorld/AutomationBench and Claw-Eval are all unreported for this model — the methodology's explicit "missing Claw-Eval = slight penalty" applies, and a single frontier terminal score cannot carry the whole dimension.
- **Reasoning: 82/100.** The only published composite is the Artificial Analysis Intelligence Index, and it is contested: **48** on the public model page versus **62** reported by Bloomberg for the gated max build. 48 sits well below the 60+ frontier marker while 62 would just clear it, so the dimension cannot be scored in the 90–100 band on disputed evidence. GPQA Diamond, HLE, LCR/MLCR and CritPt are entirely unreported. What lifts it to 82 rather than the 55–65 mid band is the verified 98.5% retrieval at 1M (above the methodology's MRCR 95%-to-1M frontier reference) plus consistent positioning as a long-horizon reasoning model.
- **Context window: 98/100.** Verified 1,000,000-token input window puts it in the ≥1M tier (95–100), and the published 98.5% retrieval across that full window satisfies the tier's "100 if ≥98% retrieval at 512K+" condition. Held two points below 100 because the retrieval figure is vendor-reported with an unnamed harness and no independent MRCR/RULER replication exists. Actual measured limits in production: 1.0M in / 943.7K out on the Meta Model API.
- **Multimodal: 90/100.** Text, image, **audio and video input** with text-only output — audio input places it at the floor of the methodology's top band (90–100). It stays at that floor because output is text-only (no speech or image generation) and because no MMMU, video-understanding, document-understanding or ASR benchmark was published for this exact model, so the breadth is documented but unquantified.
- **Coding: 90/100.** Two frontier-reference thresholds are met simultaneously: **DeepSWE 1.1 75.4%** (ref 74%+) and **Terminal-Bench 2.1 88.8%** (ref 85%+), which is the methodology's 90–100 band. It sits at the band floor rather than higher because SWE-bench Verified/Pro, LiveCodeBench and SciCode are all missing — the SWE-bench gap is specifically called out in public coverage — SWEAtlas CodeBase QnA at 59.4% shows weak whole-repository comprehension relative to its issue-solving score, and an independent hands-on review reports the benchmark lead not translating into real-world output.
- **Cost efficiency: 80/100.** $1.25 in / $4.25 out (blended $1.39 / 1M at 20:1) is materially cheaper than the $3/$15 anchor that maps to ~60, while delivering frontier terminal-agent and DeepSWE numbers, and $0.150 / 1M cached input makes repeated long-context prompts cheap. The Contributor rate of $0.10 / $0.20 is near-free but is bought with a training-data consent clause, which is a real cost for proprietary code and keeps this below the 90s. Further discount: Meta published no official rate card at launch, so the card above could still move.
- **Overall Score: 90.4/100.** Mean of the five non-cost dimensions (92 + 82 + 98 + 90 + 90) / 5 = 90.4 — best fit for long-horizon agentic coding and terminal automation over very large repositories where the 1M window with 98.5% recall and the cheap cached-input rate matter most; teams needing verifiable general reasoning should wait for GPQA/HLE/SWE-bench Verified numbers or for the contested Intelligence Index to settle, and teams with confidential code should price the Standard tier, not the Contributor rate.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only (DuckDuckGo result set for Muse Spark 1.3 benchmarks; LLM Stats model page snapshot 2026-10-01 for pricing, context, modalities and provider table; Layer3Labs benchmark guide reviewed 2026-09-09 citing the Meta AI Research announcement for DeepSWE 1.1, Terminal-Bench 2.1, SWEAtlas CodeBase QnA, long-context retrieval, efficiency deltas, variant structure and the Intelligence Index discrepancy; Artificial Analysis and LinkedIn/press summaries for the Index figures and the DeepSWE peer comparison). No peer `model/` findings files were read. Every number above is tagged with its source; unavailable figures (GPQA Diamond, HLE, LCR/MLCR, CritPt, SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, knowledge cutoff, parameter count) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
