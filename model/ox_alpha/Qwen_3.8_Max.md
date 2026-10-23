# Ox Alpha — findings by Qwen 3.8 Max

- Source: Z.ai / OpenCode Zen (`ox_alpha`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (anonymous stealth preview of GLM-5.3-Flash)
- **Short description:** **Ox Alpha was the blind-arena stealth identity of Z.ai's GLM-5.3-Flash** — an anonymous, free listing that appeared on OpenRouter and OpenCode on **2026-08-20** with no owner, no model card, a 1M-token context and text/image/video input. It became **the most-used model on OpenRouter within six days** (~2.3× the volume of the next model, ending DeepSeek's 56-day run at the top; one day alone served **~5.83 trillion prompt + ~94 billion completion tokens**), and thousands of developers used it blind and kept coming back before Z.ai confirmed the identity on Aug 26. Under the hood it is the **320B-total / 18B-active MIT open-weight native-multimodal** GLM-5.3-Flash (hybrid linear+sparse attention), scoring **57 on AA Intelligence Index v4.1.1** — tying Claude Opus 4.8 at ~1/20th the per-task cost — and approaching Opus 4.8 on coding/agentic work. It is a **preview identity, not a product**: it graduated to the official GLM-5.3-Flash lane (and the `glm-5.3-flashx` speed tier).
- **Provider / access:** Previewed free on **OpenRouter (stealth) and OpenCode** (OpenCode Zen free tier); now graduated to Z.ai's `glm-5.3-flash` / `glm-5.3-flashx` API, OpenRouter (`z-ai/glm-5.3-flash`), Kilo, and open weights on Hugging Face (**MIT**). OpenCode hosted it on US (San Francisco) hardware at **$0.07 / 1M in, $0.25 / 1M out** post-reveal.
- **Release / knowledge:** Stealth listing live **2026-08-20**; identity confirmed and weights released **2026-08-26** (as GLM-5.3-Flash). Knowledge cutoff not disclosed in the sources reviewed.
- **IDs:** `opencode/ox-alpha` (stealth); graduated to `glm-5.3-flash` / `glm-5.3-flashx` / `z-ai/glm-5.3-flash`.
- **Context window:** **1M tokens native** (OpenCode listing: 1M / ~131K output); hybrid linear+sparse attention with **IndexPool** keeps 1M-token attention memory low (3× less attention compute, 4.4× smaller KV cache than GLM-5.3).
- **Modalities:** **native multimodal — text / image / video / PDF(file) in → text out** (no audio). Visual intelligence is wired into a **self-verification loop** (renders its own frontend output, spots broken layout, fixes it unprompted); computer-use (BUA/CUA), frontend/game/Blender/CAD workflows. Thinking-only reasoning (`reasoning_effort` up to max); function calling, structured output, context caching.
- **Pricing (as of 2026-10-23):** **Free during the stealth preview** (OpenCode Zen free tier); post-reveal OpenCode US-hosted **$0.07 / $0.25** per 1M; Z.ai first-party ~$0.15 / $0.50; OpenRouter $0.0052 / $0.1985; self-host **$0 (MIT)**. AA cost-per-task ≈ **$0.045 (promo) / $0.09 (list)**. A Kilo side-by-side built an audio visualizer for **$0.01 vs Gemini 3.7 Flash's $0.17 (17× cheaper)**; a dev.to 12-hour agentic repo run cost **$0.47 total (~$0.02 per fix)**.
- **Architecture:** **MoE, 320B total / 18B activated**, 45 layers (vs GLM-5.3's 355B / 32B / 92 layers). First open frontier model fusing **sparse + linear attention** (linear for local dependencies via state modeling; sparse for global context via a lightweight indexer + IndexPool); **Manifold-Constrained Hyper-Connections (mHC)**; 30T-token multimodal pre-training corpus. Served on a custom SGLang engine (W8A8 quantization, Encode–Prefill–Decode disaggregation) — Z.ai states the launch ran on ~100,000 Chinese-made AI chips with no NVIDIA hardware.

### Raw benchmarks found

Coding & agent (Z.ai vendor-run; GLM-5.3-Flash = the weights Ox Alpha served):

- **Z.ai Code Bench v1.0** (via Claude Code), max effort: **29.0** vs Claude Opus 4.8's **29.5** — *nearly matches* the coding frontier
- **DeepSWE v1.1: 63.4** vs GLM-5.2's 46.2 (+17.2) — "a different tier of model"
- **AutomationBench: 48.8** vs GLM-5.2's 26.2 (+22.6)
- Z.ai: "approaching Claude Opus 4.8 overall" across six coding/agentic benchmarks
- Real-world blind signal: 12-hour autonomous multi-repo run completed at ~$0.02/fix (dev.to); "very good under parallel agents" (Kilo)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 57 on v4.1.1** at ~$0.045/task (promo) — ties Claude Opus 4.8's index at ~1/20th–1/40th the cost; GLM-5.3 (Max) = 60 on the same basket
- ⚠ **Index-version conflict (provenance-critical):** on AA's *current* rebased basket the family reads **GLM-5.3-Flash ≈ 42 / GLM-5.3 Max ≈ 45** (~15 pts lower because the basket got harder, not the model). v4.1.1 "57" and current "42" are **not interchangeable**.
- Community/analyst framing: Theo.gg ranks it "up there with Claude Opus and OpenAI Sol"; reddit r/Anthropic noted it "has Opus 4.8 Intelligence Index and costs less than ChatGPT Luna"
- No GPQA Diamond / HLE / MMLU-Pro figure published for Flash/Ox Alpha in the sources reviewed

Multimodal (Z.ai vendor-run):

- **OfficeQA Pro: 62.4** and **Chartography (with tools): 78.0** — **both ahead of Claude Opus 4.8** (document/dashboard/chart reasoning)
- Native visual self-verification for frontend/game/3D/canvas work; video understanding/editing with speaker attribution

> Provenance: All capability figures are **Z.ai vendor-run** (blog "GLM-5.3-Flash: Frontier Intelligence, Flash Cost," 2026-08-26; docs.z.ai GLM-5.3-Flash/FlashX overview), reproduced by Kilo's "Ox Alpha Was GLM-5.3-Flash All Along" (2026-08-26) and the dev.to stealth-preview post-mortem (2026-08-28); the launch/adoption story is corroborated by Linas Beliūnas' deep-dive (2026-08-28). The single independent signal is the **version-sensitive AA Intelligence Index** — **57 on v4.1.1** (launch) vs **~42 on the current rebased basket** — reported with both versions and not conflated. **Ox Alpha is GLM-5.3-Flash** (Z.ai-confirmed), so its capability profile is identical to the released `glm-5.3-flash` / `glm-5.3-flashx`; the *distinct* evidence for this slug is the **blind-arena validation** (most-used OpenRouter model, ~5.83T prompt tokens in one day, used without brand bias) and the **free / $0.07-$0.25 OpenCode US-hosted** pricing. ⚠ The folder's scaffolded `meta.json` lists **"ARC-AGI-2 65.83%"** — I could **not** verify this in any official or independent source reviewed, so it is **not used or asserted** here. Per methodology, vendor figures are an upper bound discounted against neutral harnesses. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong agentic tooling — **DeepSWE v1.1 63.4** and **AutomationBench 48.8** (large jumps over GLM-5.2), native multimodal **computer use (BUA/CUA)** with a self-verifying visual loop, function calling/structured output/caching, and documented long-horizon autonomy (12-hour multi-repo runs, robust under parallel agents). Held below the frontier because everything is vendor-run, the in-house harnesses lack a public task list, and no OSWorld/Toolathlon figure is published.
- **Reasoning: 82/100.** Anchored by the **version-sensitive AA Index — 57 on v4.1.1 (ties Opus 4.8) but ~42 on the current rebased basket** (GLM-5.3 Max ~3 pts above on both). The blind-arena adoption is a genuine real-world endorsement, but no GPQA/HLE/MMLU-Pro is published, so I score conservatively off the index rather than borrowing the larger GLM-5.3's numbers.
- **Context window: 88/100.** **1M tokens native** (not an extension) with ~131K output and an architecture purpose-built for cheap long-context serving (hybrid linear+sparse attention, IndexPool, 3× less attention compute, 4.4× smaller KV cache) — proven in the wild on 12-hour, 1M-context agent sessions. Discounted below the 89–93 native-1M leaders because **no MRCR-style long-context recall benchmark** is published.
- **Multimodal: 86/100.** The **first native-multimodal GLM-5 model** (text/image/video/PDF), with visual reasoning woven into coding/computer-use and — notably — **OfficeQA Pro 62.4 and Chartography 78.0 (with tools), both ahead of Claude Opus 4.8** on document/chart/dashboard work. Slightly above the FlashX read because these two corroborating multimodal benchmarks surfaced here; still capped by the **no-audio** path and vendor-only reporting.
- **Coding: 86/100.** The standout — on Z.ai Code Bench (max) it **nearly matches Claude Opus 4.8 (29.0 vs 29.5)**, DeepSWE v1.1 63.4, "approaching Opus 4.8 overall" across six coding/agentic benchmarks, and it was validated blind by thousands of developers on real long-horizon tasks. Held below the high-80s/90s because the marquee numbers are on **in-house/affiliated harnesses** and **no SWE-bench Verified/Pro or Terminal-Bench** figure is published.
- **Cost efficiency: 98/100.** The defining trait of this slug — **free during the stealth preview** (OpenCode Zen), then **$0.07/$0.25 US-hosted** (below even GLM-5.3-Flash's Z.ai rate), **$0 self-host (MIT)**, ~$0.045/task promo, a 17× -cheaper-than-Gemini-3.7-Flash Kilo demo and a $0.47 12-hour agentic run. Ties Opus 4.8's launch-basket intelligence at a tiny fraction of the cost — among the best intelligence-per-dollar ever measured. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 85/100.** Mean of Tool 84 + Reasoning 82 + Context 88 + Multimodal 86 + Coding 86 = 426/5 = 85.2 → 85. Best fit: **the blind-validated open-weight value frontier** — a free/ultra-cheap, MIT-licensed, native-multimodal 1M-context engine that approaches Claude Opus 4.8 on coding/agentic work and beats it on OfficeQA/Chartography, ideal for high-volume visual coding, parallel agents, computer-use automation, document/Office workflows and long-running sessions where $/token is decisive; escalate the hardest pure-reasoning tasks to a closed frontier model (current-basket AA Index ~42 is mid-tier). Independent read: my 85 **matches my GLM-5.3-FlashX read (85)** because it is literally the same model under its preview identity — the capability scores are deliberately identical, with the multimodal point bumped here on the extra OfficeQA-Pro/Chartography evidence and cost-efficiency on the free/stealth tier. It sits **below the queue's curated 87.7** because I discount the vendor-only/in-house benchmark table and weight the **version-sensitive AA Index honestly (57 v4.1.1 vs ~42 today)** rather than quoting only the flattering launch number; the unverified `meta.json` ARC-AGI-2 figure was excluded.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Kilo's "Ox Alpha Was GLM-5.3-Flash All Along," 2026-08-26, for the Z.ai benchmark table incl. OfficeQA Pro 62.4 / Chartography 78.0; dev.to's "GLM-5.3-Flash / Ox-Alpha: The Difference They Didn't Tell You," 2026-08-28, for the stealth-preview token volumes and OpenCode US pricing; Linas Beliūnas' "GLM-5.3-Flash (Ox Alpha)" deep-dive, 2026-08-28, for the launch/adoption story; Z.ai blog + docs.z.ai for architecture and the AA Index). The `ox_alpha` slug was resolved to the **anonymous stealth-preview identity of GLM-5.3-Flash** (Z.ai-confirmed) via its model-card identity and the OpenRouter/OpenCode stealth coverage, so its capability profile equals the released GLM-5.3-Flash; the distinct evidence is the blind-arena validation and free/stealth pricing. All capability figures are Z.ai vendor-run; the sole independent signal (AA Index) is version-sensitive and reported with both baskets. The scaffolded `meta.json` "ARC-AGI-2 65.83%" claim could not be verified and was **not** used. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
