# Gemini 3.8 Flash Cyber — findings by Space Bunny Alpha

- Source: Google (`gemini-3.8-flash-cyber`; September 2, 2026 launch variant)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's cybersecurity-focused Gemini 3.8 Flash variant for autonomous vulnerability discovery, patching, and cyber-agent workflows.
- **Provider / access:** Gemini 3.8 Flash family. Access is **gated to the Fairwind Program defenders**; the variant is not a generally available public API SKU. An exact standalone API ID and hosted public price were not published in the sources reviewed.
- **Release / knowledge:** Google and BenchLM list 2026-09-02 as the launch date. No knowledge cutoff was published.
- **IDs:** Exact provider ID not verified; tracked as `gemini-3.8-flash-cyber`.
- **Context window:** **Not published for this exact variant.** The standard Gemini 3.8 Flash limit is deliberately not borrowed.
- **Modalities:** No complete exact-variant modality table was published; the security evaluations cover code and repository workloads only, so no image/audio/video claim is made and Multimodal is scored at the text-only floor.
- **Pricing (as of 2026-09-29):** **No public price.** Because access is Fairwind-gated, there is no list rate to quote and the standard Gemini 3.8 Flash price is not substituted.
- **Architecture:** Proprietary; Google has not disclosed parameter count for the Cyber variant.

### Raw benchmarks found

Agent / tool use:

- Gray Swan IPI Benchmark: **94.0%** (indirect prompt-injection robustness; attack success rate after 15 attempts is **6.0%**, lower is better). Gray Swan set up the experiment independently and returned the results to Google (Google's published evaluation methodology, accessed 2026-09-29).
- CyberGym: **86.2% pass@1** (self-computed by Google on the official Final-submission leaderboard setting; as recorded in Google's published Cyber evaluation)
- Real-world vulnerability discovery: **71.0% recall over 1,200 recent confirmed historical CVEs** across 20 programming languages in popular open-source projects (Google internal dataset, Google evaluation methodology)
- CWE-Bench: **47.2% pass@1** (Collinear AI leaderboard; Google notes this sits on the cost/accuracy Pareto frontier versus a 47.8% leader)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- No exact GPQA, HLE, MRCR, LCR/MLCR, CritPt, or hallucination score was found.
- Artificial Analysis Intelligence Index / any public composite index: **not published for this exact variant**

Coding:

- CWE-Bench: **47.2% pass@1** (cybersecurity automated-patching benchmark, not a general SWE-bench result)
- CyberGym 86.2% (autonomous vulnerability discovery/patching) is the strongest exact-model coding-adjacent evidence
- SWE-bench Verified, SWE-Pro, DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact score found**

Long context:

- No exact-model context limit or retrieval-at-length result was published. The standard Gemini 3.8 Flash limit is intentionally not transferred.

Sources consulted: [Google Gemini 3.8 Flash Cyber evaluation methodology (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_cyber_model_evaluation.pdf), [Google DeepMind Gemini Cyber page](https://deepmind.google/models/gemini/cyber), [Google's Gemini 3.8 Flash Cyber launch coverage](https://www.datacamp.com/blog/gemini-3-8-flash-cyber), and [BenchLM Gemini 3.8 Flash Cyber](https://benchlm.ai/models/gemini-3-8-flash-cyber), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 95/100.** CyberGym 86.2%, 71.0% real-world CVE recall over 1,200 CVEs, and CWE-Bench 47.2% are direct evidence of autonomous security-agent execution, reinforced by Gray Swan IPI 94.0% as an independent robustness measurement; only these four exact rows exist, so the score is not maximal.
- **Reasoning: 75/100.** Vulnerability discovery and injection-robustness results imply useful reasoning, but no exact GPQA/HLE/index value is published for the variant, so the score stays well below the tool-use figure.
- **Context window: 50/100.** The exact variant's context limit is not published, so no family value is assumed.
- **Multimodal: 15/100.** No exact-variant modality table was published and the evidence base is code and repository text, so the model is scored at the text-only floor rather than borrowing standard Gemini 3.8 Flash capabilities.
- **Coding: 62/100.** CyberGym 86.2% and CWE-Bench 47.2% show strong narrow-domain patching ability, but every general coding benchmark is absent and access is gated.
- **Cost efficiency: 50/100.** No public price exists for this Fairwind-gated variant; it is scored conservatively rather than inheriting the sibling model's price.
- **Overall Score: 59.4/100.** (95 + 75 + 50 + 15 + 62) / 5 = 297 / 5 = 59.4. Best fit: gated security research and vulnerability-analysis workflows where the four published cyber results matter more than broad model coverage.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's published Cyber evaluation methodology and launch materials plus BenchLM's exact profile; the Gray Swan result is attributed as independently run, and sibling-model specifications and standard Flash prices were not transferred. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
