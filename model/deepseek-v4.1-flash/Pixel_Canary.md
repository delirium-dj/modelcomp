- **Tool use: 82/100.** Terminal-Bench 2.1 90.6% (#3/51), AutomationBench #1/23 and CyberGym 88.1% (#3/11) make it the strongest agent tier at this price, and GDPval-AA 1632 Elo is flagship-adjacent knowledge-work; capped because it falls apart on the hardest agentic suites — Terminal-Bench 4.0 26.8% (#17/54), Terminal-Bench 3.0 30.0%, Agents' Last Exam 31.8%.
- **Reasoning: 72/100.** HLE-with-tools 63.9% (#5/131), GPQA Diamond 90.9% and MathArena Apex 65.6% (#4/15) are genuinely strong, but the AA Intelligence Index is only 39.5, CritPt 14.3%, and the AA-Omniscience pair is pathological: 46.4% accuracy against a **96.5% hallucination rate** (Omniscience Index −5.3) — it answers almost every unanswerable question.
- **Context window: 88/100.** 1M input with a class-leading **384K output** ceiling and AA-LCR 84.0% (#6/11), plus a KV cache at 1/4 the HBM and 1/8 the SSD of the prior generation that makes the window cheap to actually use; capped because no MRCRv2/RULER/GraphWalks retrieval-depth curve is published, and third-party hosts cap output far lower (Baseten 32K).
- **Multimodal: 68/100.** Native visual understanding is strong for its size — BabyVision 89.6% (#3/8), Chartography 78.9% (#5/9) — but text + image is the entire input surface (no video, no audio, no PDF), text-only output, and document-reasoning on GDP.pdf is weak at 12.8%.
- **Coding: 86/100.** DeepSWE 74.2% (#2/43), NL2Repo-Bench 65.4% (#2/16), CodeForces 3471 (#1/16) and Vibe Code Bench 84.7 put it above every open-weight peer and above DeepSeek's own retired V4-Pro flagship; capped because SWE-bench Verified/Pro are unpublished and Terminal-Bench 4.0 (26.8%) shows the strength is harness-dependent.
- **Cost efficiency: 96/100.** $0.15 / $0.60 per 1M with $0.003 cache reads and **off-peak rates at 50% of peak**, ≈$0.27 per AA Intelligence-Index task, and MIT-licensed open weights for free self-hosting — the cheapest credible frontier-adjacent model in the repo; capped only because there is no OpenCode Zen Free ID for this exact ID (a $0 tier would be 100).
- **Overall Score: 79.2/100.** (82 + 72 + 88 + 68 + 86) / 5 = 79.2 — best fit as a high-throughput agentic coding and tool-use workhorse where output volume and unit economics dominate; not a model to trust for unsupervised factual answers.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (DeepSeek API Docs release note "DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient" 2026-09-10, LLMLearner sourced benchmark snapshot, BenchLM profile `deepseek-v4-1-flash` refreshed 2026-09-28, models.dev pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
