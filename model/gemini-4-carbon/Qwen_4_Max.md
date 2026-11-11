# Gemini 4 Carbon — findings by Qwen 4 Max

- Source: Google DeepMind/gemini-4-carbon
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's strongest model (announced two weeks after Gemini 4 Argon), focused on state-of-the-art cybersecurity defense and long-horizon agentic engineering. Distinct successor-family model, not a tier of Argon; shipped under its own name after the "Jetski" internal leak.
- **Provider / access:** Google — staged rollout: subset of cyber defenders first (week of 2026-10-28), then trusted partners via the Fairwind Program; developers/businesses/consumers "as soon as possible", no date. As of 2026-10-29 not in the Gemini API changelog and no model ID published (TeamoRouter); engaged in the U.S. government's voluntary pre-release testing.
- **Release / knowledge:** Announced 2026-10-28. Knowledge cutoff not stated.
- **IDs:** `google/gemini-4-carbon` (tracker convention; official API ID unpublished). No Free ID on OpenCode Zen; no public API access yet.
- **Context window:** Over 1M tokens input (Labellerr: "holds over one million tokens at once"); Google's post does not state exact input/output limits — the 1M output limit is confirmed for Argon but unconfirmed for Carbon.
- **Modalities:** Gemini-family multimodal input (text/image/video; Google cites improved "multimodal understanding" and full-stack web development); text out. Reasoning: yes (long-trajectory, days-long runs). Tool calls: yes. Carbon-specific modality table not published.
- **Pricing (as of 2026-11-11):** Introductory $2.00 in / $10.00 out per 1M, cached input 95% off ($0.10/M); rises to $4/$20 after the introductory period (duration unannounced) — same structure as Argon.
- **Architecture:** Proprietary; parameters undisclosed. Same multi-layered safety stack as Argon plus alignment gains: Terminal-Bench 4.0 successful cheating 0.0% (attempts 0.4%), high-severity misalignment alerts -80% internally, unsupported claims ~2x fewer, overreach -26% / under-service -29%, Gray Swan IPI attack success 0.0% (Argon 0.7%). Cyber evals run without guardrails.

### Raw benchmarks found

Agent / tool use:

- SEC-bench Pro (**vulnerability discovery, no guardrails**): **88.2%** — state of the art (Google)
- ExploitGym (**exploitation/validation**): **54.8%** — state of the art (Google)
- CWE-bench (**Collinear, root-cause patching**): **71.0%** (Google; Argon 68.0% on v1)
- WebDev Arena: **1768 Elo — #4** (+89 pts; Google)
- Terminal-Bench 4.0: accuracy improved with 0.0% successful cheating (Google) — absolute score not published in the post
- Gray Swan IPI: **0.0%** attack success rate (Google; Argon 0.7%)
- Tau3-Banking / GDPval-AA / AutomationBench: no verified public score found
- Internal (Google, not public): >2x secure-code generation success vs Argon; Chrome team reports >10x better high-quality patch generation than another lab's frontier model; Wiz sees it leading web-penetration-testing benchmarks

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v5.0**: **59 — rank #1** (Google announcement; note the index was recently updated to v5.0, so this is not directly comparable to pre-v5 scores like Argon's 52.6 or Opus 5.5's 57.6)
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found
- Honesty (internal): unsupported claims cut ~2x vs Argon; surfaces discrepancies to the user before acting

Coding:

- Long-horizon engineering: days-long autonomous runs root-causing and patching subtle bugs across large codebases and low-level systems (Google internal, qualitative)
- SWE-bench Verified / DeepSWE / FrontierSWE / LiveCodeBench: no verified public score found
- Full-stack web development quality jump reflected in WebDev Arena +89 Elo (above)

Long context:

- 1M+ token window (Labellerr); no public MRCR/RULER/GraphWalks retrieval numbers found for Carbon specifically.

### Normalized scores (1–100)

- **Tool use: 94/100.** SOTA across the cyber defense lifecycle (SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%), 0.0% IPI attack success, days-long agentic persistence; capped by unpublished Terminal-Bench/GDPval absolutes and gated access.
- **Reasoning: 93/100.** #1 on the updated AA Intelligence Index v5.0 (59) — the top composite spot at release; capped by no published GPQA/HLE and the version break that prevents direct comparison with earlier index leaders.
- **Context window: 97/100.** 1M+ input window supports days-long trajectories; slightly below the top mark because Google has not confirmed Carbon's exact output limit (Argon's 1M output is vendor-stated) and no retrieval benchmark is published.
- **Multimodal: 85/100.** Gemini-family text/image/video understanding with vendor-cited multimodal gains; capped by the absence of a Carbon-specific modality table and text-only output.
- **Coding: 95/100.** Google's strongest coder: multi-day root-cause patching, WebDev Arena #4 (1768, +89), >2x secure-code uplift and the Chrome 10x patch-quality report; capped by no public SWE-bench/DeepSWE numbers.
- **Cost efficiency: 78/100.** Intro $2/$10 with $0.10 cached input undercuts frontier peers (Astra $10/$50, Opus 5.5 $4/$20); discounted for the scheduled $4/$20 rise and the fact that no developer can buy it yet.
- **Overall Score: 92.8/100.** Mean of the five quality dims (94+93+97+85+95)/5 = 92.8. Best-fit: cybersecurity defense and very long-horizon engineering once Fairwind/public access opens — the strongest composite (AA v5.0 #1) with the strictest honesty/alignment behavior in the Gemini line.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (vendor announcement + independent router/tracker coverage); scores are normalized 1–100 interpretations, not official vendor scores. Index-version provenance is explicit (AA v5.0 vs pre-v5 figures); internal-only claims are labelled and never scored as public benchmarks.
- Reference URLs:
  - [Gemini 4 Carbon: our next frontier model — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon Is Out: Price, Benchmarks, API Availability — TeamoRouter](https://teamorouter.com/blogs/gemini-4-carbon)
  - [Gemini 4 Carbon: Key Features and Details — Labellerr](https://www.labellerr.com/blog/gemini-4-carbon-key-features-and-details/)
  - [Gemini 4 Carbon Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.